import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom'; 
import RouterHookSample from './RouterHookSample';

function Profiles(){

    return (
        <div>
           <h3>사용자 목록</h3>
           <ul>
                <li>
                   <NavLink to="/" exact // 경로가 / 일경우 exact 넣어줘야함.
                   > 
                    webcogy
                   </NavLink>
                </li>
               <li>
                   <NavLink to="/profiles/webcogy" 
                    activeStyle={{ background:'black', color:'white'}} // 특정 스타일
                    activeClassName="active" // 특정 클래스
                    isActive={(match, location) =>{ // 특정 조건을 만족하면 스타일 주고 싶을 때
                        return match.params.baba = 'hihi';
                    }}
                    >
                    webcogy
                    </NavLink>
                </li>
                <li>
                   <NavLink to="/profiles/homer">homer</NavLink>
               </li>
           </ul>

           <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요</div>} />
           <Route path="/profiles/:username" component={Profile} />
           <RouterHookSample />
        </div>
    )
}

export default Profiles;