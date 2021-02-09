import React, { useEffect } from 'react';

function HistorySample({ history }){
    const goBack = () => {
        history.goBack();
    }

    const goHome = () => {
        history.push('/');
    }

    const replaceToHome = () => {
        history.replace('/');
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        return () => {
            unblock(); // 컴포넌트가 언마운트될 때 이탈방지기능을 비활성화하겠다
        }
    }, [history]);

    return (
        <div>
           <button onClick={goBack}>뒤로</button>
           <button onClick={goHome}>홈으로</button>
           <button onClick={replaceToHome}>홈으로 (Replace)</button>
        </div>
    )
}

export default HistorySample;