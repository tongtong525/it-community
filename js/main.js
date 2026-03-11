// 主 JavaScript 文件

document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏激活状态
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // 搜索功能
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = prompt('请输入搜索关键词：');
            if (searchTerm) {
                alert(`搜索功能开发中... 关键词：${searchTerm}`);
                // 这里可以集成实际的搜索功能
            }
        });
    }

    // 登录/注册按钮
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('登录功能开发中...');
            // 可以跳转到登录页面或显示登录模态框
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            alert('注册功能开发中...');
            // 可以跳转到注册页面或显示注册模态框
        });
    }

    // 文章卡片点击效果
    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function() {
            // 实际项目中可以跳转到文章详情页
            console.log('文章卡片被点击');
        });
    });

    // 项目卡片点击效果
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            // 实际项目中可以跳转到项目详情页
            console.log('项目卡片被点击');
        });
    });

    // 话题卡片点击效果
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', function() {
            // 实际项目中可以跳转到话题讨论页
            console.log('话题卡片被点击');
        });
    });

    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 为卡片元素添加初始样式和观察
    document.querySelectorAll('.topic-card, .article-card, .project-card, .activity-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 统计数字动画
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const hasPlus = text.includes('+');
            const hasK = text.includes('k');
            
            // 提取数字
            let numStr = text.replace(/[^0-9.]/g, '');
            let num = parseFloat(numStr);
            
            if (isNaN(num)) return;

            // 如果是 k 单位，转换为实际数字
            if (hasK) {
                num = num * 1000;
            }

            let current = 0;
            const increment = num / 50;
            const duration = 2000; // 2 秒
            const stepTime = duration / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= num) {
                    current = num;
                    clearInterval(timer);
                }

                // 格式化显示
                let displayNum = current;
                if (hasK) {
                    displayNum = (current / 1000).toFixed(1);
                }
                
                stat.textContent = displayNum.toLocaleString() + (hasPlus ? '+' : '') + (hasK ? 'k' : '');
            }, stepTime);
        });
    }

    // 当英雄区域可见时触发动画
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // 表单验证示例（用于未来的登录/注册功能）
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    // 暴露验证函数供全局使用
    window.formValidation = {
        validateEmail,
        validatePassword
    };

    // 控制台欢迎信息
    console.log('%c🦞 欢迎来到 IT 技术社区！', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%c这是一个技术交流与分享平台', 'font-size: 14px; color: #64748b;');
    console.log('%c开发中... 敬请期待更多功能！', 'font-size: 12px; color: #10b981;');

    // 页面加载完成
    console.log('✅ 页面加载完成');
});

// 工具函数
const Utils = {
    // 格式化日期
    formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    // 格式化数字（添加千位分隔符）
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    // 截断文本
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    },

    // 获取相对时间
    getRelativeTime(date) {
        const now = new Date();
        const diff = now - new Date(date);
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return '刚刚';
        if (minutes < 60) return `${minutes}分钟前`;
        if (hours < 24) return `${hours}小时前`;
        if (days < 7) return `${days}天前`;
        return this.formatDate(date);
    }
};

// 暴露工具函数
window.Utils = Utils;
