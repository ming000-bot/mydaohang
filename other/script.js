var _dummyGlobal = 42;
let _unusedArray = [1, 2, 3, 4, 5];
const __fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

class DummyEncryptor {
    constructor(seed) {
        this.seed = seed || 0;
        this.salt = 'abcdef';
    }

    encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) + this.seed);
        }
        return result;
    }

    decode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) - this.seed);
        }
        return result;
    }

    fakeHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
        }
        return hash;
    }
}


const dummyEnc = new DummyEncryptor(3);
const _fakeHashResult = dummyEnc.fakeHash('hello world');


function uselessFibonacci(n) {
    if (n <= 1) return n;
    return uselessFibonacci(n - 1) + uselessFibonacci(n - 2);
}
const _fibResult = uselessFibonacci(10);

function uselessMathLoop() {
    let sum = 0;
    for (let i = 0; i < 5000; i++) {
        sum += Math.sqrt(i) * Math.sin(i);
    }
    return sum;
}
const _mathDump = uselessMathLoop();


(function uselessWrapper() {
    const dummyData = ['a', 'b', 'c', 'd'];
    const mapped = dummyData.map(x => x.toUpperCase()).filter(x => x !== 'C');
    console.log('[dummy] 加载了一些数据:', mapped);
})();


async function fakeNetworkRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 'ok', data: 'nothing' });
        }, 10);
    });
}

fakeNetworkRequest().then(res => console.log('[dummy] 请求完成', res));


const _fakeConfig = { a: 1, b: { c: 2 } };
const _fakeClone = JSON.parse(JSON.stringify(_fakeConfig));
_fakeClone.b.c = 999;


const __part1 = [65, 98, 99]; // A, b, c
const __part2 = [64, 50, 48, 50, 56, 33]; // @, 2, 0, 2, 8, !
const __fullCode = __part1.concat(__part2);
const REAL_PASSWORD = String.fromCharCode.apply(null, __fullCode);


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


const loginContainer = document.getElementById('loginContainer');
const navContainer = document.getElementById('navContainer');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const errorMessage = document.getElementById('errorMessage');


if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', PARTICLES_CONFIG);
} else {
    console.warn('particles.js 库未加载，请检查网络');
}


function validateCredentials(input) {

    let temp = input.trim();
    let check1 = temp.length > 0;
    let check2 = temp !== ' ';
    let check3 = temp !== null;


    let fakeCheck = (check1 && check2) || !check3;
    if (fakeCheck) {
    }


    const isMatch = (temp === REAL_PASSWORD);


    const dummyArray = [1, 2, 3];
    const mappedDummy = dummyArray.map(x => x * 2);
    console.log('[dummy] 映射结果:', mappedDummy);

    return isMatch;
}


function handleLogin() {
    const inputPassword = passwordInput.value;


    const isValid = validateCredentials(inputPassword);

    if (isValid) {

        loginContainer.style.display = 'none';
        navContainer.style.display = 'block';
        errorMessage.style.display = 'none';

        passwordInput.value = '';
    } else {

        errorMessage.style.display = 'block';
        passwordInput.classList.add('shake');
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
        passwordInput.value = '';
        passwordInput.focus();
    }
}


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

console.log('✅ 导航系统已启动');
