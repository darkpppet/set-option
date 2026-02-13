/*
 * App.tsx
 * 가장 메인 페이지
 */

import './App.css';
import Equipments from './components/Equipments.tsx'
import SetResult from './components/SetResult.tsx'

export default function App() {
    return (
        <div className="App">
            <h1>세트옵션 시뮬레이터</h1>
            <div className="main-container">
                <div className="main-top-container">
                    {/* 장비창 */}
                    <Equipments/>
                    {/* 적용중인 세트옵션 (요약) */}
                    {/*<SummaryResult setsData={setsData} />*/}
                </div>
                {/* 적용중인 세트옵션 (상세) */}
                <SetResult/>
            </div>
        </div>
    );
}
