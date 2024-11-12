document.addEventListener('DOMContentLoaded', () => {
    const fontSize = document.getElementById('fontSize');
    const fontColor = document.getElementById('fontColor');
    const preview = document.getElementById('preview');
    const fontSizeValue = document.getElementById('fontSizeValue');

    function updatePreview() {
        preview.style.fontSize = `${fontSize.value}px`;
        preview.style.color = fontColor.value;
        fontSizeValue.textContent = `${fontSize.value}px`;
    }

    // 事件监听
    fontSize.addEventListener('input', updatePreview);
    fontColor.addEventListener('input', updatePreview);

    // 添加点击预览区域时清除默认文本的功能
    preview.addEventListener('focus', function() {
        if (this.textContent === 'TYPE HERE TO TEST THE FONT') {
            this.textContent = '';
        }
    });

    // 如果预览区域为空，恢复默认文本
    preview.addEventListener('blur', function() {
        if (this.textContent.trim() === '') {
            this.textContent = 'TYPE HERE TO TEST THE FONT';
        }
    });

    // 初始化
    updatePreview();
});