@echo off
chcp 65001 >nul
echo ========================================
echo   Autodesk 疑难问题 - PDF 部署说明
echo ========================================
echo.

:: 检查 PDF 文件是否存在
if exist "E:\Downloads\Autodeskyinan.pdf" (
    echo [√] 找到 PDF 文件：E:\Downloads\Autodeskyinan.pdf
    echo.
    echo 正在复制到网站目录...
    copy /Y "E:\Downloads\Autodeskyinan.pdf" "downloads\Autodeskyinan.pdf" >nul
    if %errorlevel% equ 0 (
        echo [√] PDF 文件已成功复制到 downloads 文件夹
        echo.
        echo ========================================
        echo   部署完成！
        echo ========================================
        echo.
        echo 访问地址：
        echo - 主页：http://localhost:8000
        echo - Autodesk 专区：http://localhost:8000/autodesk
        echo.
        echo 按任意键退出...
        pause >nul
    ) else (
        echo [×] 复制失败，请手动复制
        pause
    )
) else (
    echo [×] 未找到 PDF 文件：E:\Downloads\Autodeskyinan.pdf
    echo.
    echo 请确保 PDF 文件在该位置，然后重新运行此脚本
    echo.
    echo 或者手动将 PDF 文件复制到：
    echo %~dp0downloads\Autodeskyinan.pdf
    echo.
    pause
)
