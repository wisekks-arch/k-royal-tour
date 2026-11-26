$ErrorActionPreference = 'Continue'
$port = 5060
$scriptDir = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }

$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.htm'  = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.svg'  = 'image/svg+xml'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host " [K-Royal Inbound Tour] 로컬 서버 실행 중" -ForegroundColor Green
    Write-Host " 고객 사이트: http://localhost:$port/index.html" -ForegroundColor Yellow
    Write-Host " 관리자(Admin): http://localhost:$port/admin.html" -ForegroundColor Yellow
    Write-Host " 모바일 비용등록: http://localhost:$port/m-expense.html" -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Cyan

    Start-Process "http://localhost:$port/index.html"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl.Split('?')[0]
        if ($rawUrl -eq '/' -or $rawUrl -eq '') { $rawUrl = '/index.html' }
        elseif ($rawUrl -eq '/admin') { $rawUrl = '/admin.html' }
        elseif ($rawUrl -eq '/m/expense') { $rawUrl = '/m-expense.html' }

        $localPath = Join-Path $scriptDir ($rawUrl.TrimStart('/'))
        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }
            $response.ContentType = $mime
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.StatusCode = 200
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawUrl")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.OutputStream.Close()
    }
} finally {
    if ($listener.IsListening) { $listener.Stop() }
    $listener.Close()
}
