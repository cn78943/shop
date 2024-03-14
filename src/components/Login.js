import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        // 로그인 처리를 수행한 후
        // isAuthenticated를 true로 설정합니다.
        setIsAuthenticated(true);
        // 메인 페이지로 리디렉션합니다.
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='border shadow-lg p-4 w-80'>
                <h2 className="text-center text-2xl font-bold mb-4">로그인</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">이메일</label>
                        <input type="email" className="form-input border mt-1 block w-full" id="email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">비밀번호</label>
                        <input type="password" className="form-input border mt-1 block w-full" id="password" />
                    </div>
                    <button type="button" onClick={handleLogin} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">로그인</button>
                </form>
                <button className="w-full flex justify-end text-1xl font-bold mt-4">회원가입</button>
            </div>
        </div>
    );
}
