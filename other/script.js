// ================================================================
//  第一部分：大量无用的“烟雾弹”代码（混淆视听）
// ================================================================

// 无用的全局变量
var _dummyGlobal = 42;
let _unusedArray = [1, 2, 3, 4, 5];
const __fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

// 无用的工具类（从未真正使用）
class DummyEncryptor {
    constructor(seed) {
        this.seed = seed || 0;
        this.salt = 'abcdef';
    }
    // 假装加密
    encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) + this.seed);
        }
        return result;
    }
    // 假装解密
    decode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) - this.seed);
        }
        return result;
    }
    // 完全无用的哈希模拟
    fakeHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
        }
        return hash;
    }
}

// 实例化无用类
const dummyEnc = new DummyEncryptor(3);
const _fakeHashResult = dummyEnc.fakeHash('hello world');

// 无用的递归函数（计算斐波那契，但结果从未使用）
function uselessFibonacci(n) {
    if (n <= 1) return n;
    return uselessFibonacci(n - 1) + uselessFibonacci(n - 2);
}
const _fibResult = uselessFibonacci(10); // 只是浪费 CPU

// 无用的循环（计算平方根和）
function uselessMathLoop() {
    let sum = 0;
    for (let i = 0; i < 5000; i++) {
        sum += Math.sqrt(i) * Math.sin(i);
    }
    return sum;
}
const _mathDump = uselessMathLoop();

// 无用的 IIFE（立即执行函数，除了打日志什么都不做）
(function uselessWrapper() {
    const dummyData = ['a', 'b', 'c', 'd'];
    const mapped = dummyData.map(x => x.toUpperCase()).filter(x => x !== 'C');
    console.log('[dummy] 加载了一些无用数据:', mapped);
})();

// 无用的异步模拟函数
async function fakeNetworkRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 'ok', data: 'nothing' });
        }, 10);
    });
}
// 调用但忽略结果
fakeNetworkRequest().then(res => console.log('[dummy] 假请求完成', res));

// 无用的对象深拷贝模拟
const _fakeConfig = { a: 1, b: { c: 2 } };
const _fakeClone = JSON.parse(JSON.stringify(_fakeConfig));
_fakeClone.b.c = 999; // 修改克隆不影响原对象

// ================================================================
//  第二部分：真正的配置与密码（隐藏在其中）
// ================================================================

// 真正的密码被拆分为字符编码数组，分散在大量变量中
// 实际密码：Abc@2024!
// 字符码：65, 98, 99, 64, 50, 48, 50, 52, 33
const __part1 = [65, 98, 99]; // A, b, c
const __part2 = [64, 50, 48, 50, 56, 33]; // @, 2, 0, 2, 8, !
const __fullCode = __part1.concat(__part2);
const REAL_PASSWORD = String.fromCharCode.apply(null, __fullCode);

// 粒子背景配置（真实有效）
const PARTICLES_CONFIG = {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#06b6d4' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#06b6d4', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.8 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
};

// ================================================================
//  第三部分：真正的初始化与登录逻辑
// ================================================================

// 获取 DOM 元素
const loginContainer = document.getElementById('loginContainer');
const navContainer = document.getElementById('navContainer');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const errorMessage = document.getElementById('errorMessage');

// 初始化粒子背景
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', PARTICLES_CONFIG);
} else {
    console.warn('particles.js 库未加载，请检查网络');
}

// 真正的登录验证函数（被无用代码层层包裹）
function validateCredentials(input) {
    // 加入一些无用的中间变量
    let temp = input.trim();
    let check1 = temp.length > 0;
    let check2 = temp !== ' ';
    let check3 = temp !== null;

    // 假校验（永远为真）
    let fakeCheck = (check1 && check2) || !check3;
    if (fakeCheck) {
        // 这里故意留空，什么也不做
    }

    // 真正的密码比对
    const isMatch = (temp === REAL_PASSWORD);

    // 更多无用操作
    const dummyArray = [1, 2, 3];
    const mappedDummy = dummyArray.map(x => x * 2);
    console.log('[dummy] 映射结果:', mappedDummy);

    return isMatch;
}

// 处理登录事件
function handleLogin() {
    const inputPassword = passwordInput.value;

    // 调用混杂了无用代码的验证函数
    const isValid = validateCredentials(inputPassword);

    if (isValid) {
        // 密码正确 → 显示导航
        loginContainer.style.display = 'none';
        navContainer.style.display = 'block';
        errorMessage.style.display = 'none';
        // 清空输入框（安全）
        passwordInput.value = '';
    } else {
        // 密码错误 → 错误提示 + 抖动
        errorMessage.style.display = 'block';
        passwordInput.classList.add('shake');
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// 绑定事件
loginBtn.addEventListener('click', handleLogin);

passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleLogin();
    }
});

passwordInput.addEventListener('input', function() {
    errorMessage.style.display = 'none';
});

// 控制台提示（真正的密码不会在这里暴露）
console.log('✅ 导航系统已启动 (混淆版本)');