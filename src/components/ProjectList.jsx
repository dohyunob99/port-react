
import React from 'react'

const ProjectList = () => {
  return (

    <section id="projectList" className="projectList">
        <div className="inner">
            <h2>Project List</h2>
            <div className="tableBox">						 
                <table className="tableList">
                    <caption>경력기술서</caption>
                    <colgroup>
                      <col style={{ width: "33%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "auto" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">프로젝트명</th>
                            <th scope="col">참여기간</th>
                            <th scope="col">고객사</th>
                            <th scope="col">사이트 바로가기</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr>
                            <th scope="row">
                                미디어로그, +알파 알뜰폰, 천리안
                            </th>
                            <td>2023.05 ~ 2024.04 </td>
                            <td>LG U+</td>
                            <td>
                                <a href="https://www.medialog.co.kr/" target="_blank" rel="noopener noreferrer">https://www.medialog.co.kr</a><br />
                                <a href="https://mvnopartners.uplus.co.kr/" target="_blank" rel="noopener noreferrer">https://mvnopartners.uplus.co.kr</a><br />
                                <a href="https://www.chol.com/" target="_blank" rel="noopener noreferrer">https://www.chol.com/</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row">
                                밀크T초둥, 밀크T중둥, 밀크T고둥
                            </th>
                            <td>2022.05 ~ 2023.03 </td>
                            <td>천재교과서</td>
                            <td>
                                <a href="http://www.milkt.co.kr/Main/Main_new" target="_blank" rel="noopener noreferrer">http://www.milkt.co.kr</a><br />
                                <a href="https://mid.milkt.co.kr/Main/frm_Main.aspx" target="_blank" rel="noopener noreferrer">https://mid.milkt.co.kr</a><br />
                                <a href="https://high.milkt.co.kr/Main/frm_Main.aspx" target="_blank" rel="noopener noreferrer">https://high.milkt.co.kr</a><br />

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">병원 콜센터 상담시스템 구축</th>
                            <td>2022.01 ~ 2022.05 </td>
                            <td>브로드씨엔에스</td>
                            <td>관리자시스템</td>
                        </tr>

                        <tr>
                            <th scope="row">초록우산 어린이재단 웹, 모바일 캠페인 및 유지보수</th>
                            <td>2021.11 ~ 2021.12 </td>
                            <td>사회복지법인 어린이재단</td>
                            <td>	<a href="https://www.childfund.or.kr" target="_blank" rel="noopener noreferrer">https://www.childfund.or.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">정책자금 온라인 신청,전자약정, 전자서고 관리시스템</th>
                            <td>2021.07 ~ 2021.10</td>
                            <td>중소벤처기업진흥공단</td>
                            <td>	<a href="https://www.kosmes.or.kr/" target="_blank" rel="noopener noreferrer">https://www.kosmes.or.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">DOUZONE FOEX 교육센터</th>
                            <td rowSpan="3">2020.05 ~ 2021.06</td>
                            <td rowSpan="3">더존비즈온</td>
                            <td>
                                <a href="https://dtecplex.com/" target="_blank" rel="noopener noreferrer">https://dtecplex.com</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">DOUZONE DTEC </th>
                            <td>
                                <a href="https://dtec.douzone.com/" target="_blank" rel="noopener noreferrer">https://dtec.douzone.com</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">DOUZONE 온라인고객센터</th>
                            <td>
                                <a href="https://helpdesk.douzone.com/" target="_blank" rel="noopener noreferrer">https://helpdesk.douzone.com</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">응답소 민원 분석 시스템</th>
                            <td>2019.12 ~ 2020.03</td>
                            <td>서울시청</td>
                            <td>관리자시스템</td>
                        </tr>
                        <tr>
                            <th scope="row">2019 MAMA 아시안 뮤직 어워즈 PC, 모바일</th>
                            <td>2019.08 ~ 2019.12</td>
                            <td>CJ ENM</td>
                            <td><a href="http://mama.mwave.me/kr/main" target="_blank" rel="noopener noreferrer">http://mama.mwave.me/kr/</a></td>
                        </tr>
                        <tr>
                            <th scope="row">글로벌 서비스 모바일웹,앱</th>
                            <td>2018.10 ~ 2019.08</td>
                            <td>네이버 라인</td>
                            <td>해외서비스(4cast, 라인 내 서비스)</td>
                        </tr>
                        <tr>
                            <th scope="row">도봉구청 대표사이트 <span className="t_red">[웹접근성취득]</span></th> 
                            <td rowSpan="7">2015.06 ~ 2018.09</td>
                            <td rowSpan="7">도봉구청</td>
                            <td><a href="http://www.dobong.go.kr/" target="_blank" rel="noopener noreferrer">http://www.dobong.go.kr</a></td>
                        </tr>	
                        <tr>
                            <th scope="row">사이버구청장실 <span className="t_red">[웹접근성취득]</span></th>
                            <td><a href="http://ceo.dobong.go.kr" target="_blank" rel="noopener noreferrer">http://ceo.dobong.go.kr/</a></td>
                        </tr>
                        <tr>
                            <th scope="row">문화관광 <span className="t_red">[웹접근성취득]</span></th>
                            
                            <td><a href="http://tour.dobong.go.kr/" target="_blank" rel="noopener noreferrer">http://tour.dobong.go.kr</a></td>
                        </tr>

                        <tr>
                            <th scope="row">도봉보건소 <span className="t_red">[웹접근성취득]</span></th>
                            
                            <td><a href="http://health.dobong.go.kr" target="_blank" rel="noopener noreferrer">http://health.dobong.go.kr/</a></td>
                        </tr>
               
                        <tr>
                            <th scope="row">통합예약</th>
                            
                            <td><a href="http://yeyak.dobong.go.kr/" target="_blank" rel="noopener noreferrer">http://yeyak.dobong.go.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">함석헌기념관</th>
            
                            <td><a href="http://hamsokhon.dobong.go.kr/" target="_blank" rel="noopener noreferrer">http://hamsokhon.dobong.go.kr</a></td>
                        </tr>                      
                        <tr>
                            <th scope="row">기타 도봉구청 사이트 유지관리</th>
                            <td>주정차인터넷서비스, 도봉e뉴스, 도봉 건강도시, 웰빙도봉, 도봉 건강이음터, 자치회관, 도봉여성, 김수영문학관, 아동친화도시, 둘리뮤지엄  </td>
                        </tr>
                        <tr>
                            <th scope="row"> 바로북</th>
                            <td>2015.02 ~ 2015.03</td>
                            <td>바로북</td>
                            <td><a href="http://www.barobook.com/" target="_blank" rel="noopener noreferrer">http://www.barobook.com</a></td>
                        </tr>
                        <tr>
                            <th scope="row">리홈쿠첸 무전표 시스템</th>
                            <td>2014.12 ~ 2015.01</td>
                            <td>리홈쿠첸</td>
                            <td>관리자시스템</td>
                        </tr>
                        <tr>
                            <th scope="row">KSPO 체육지도자 자격검정연수원</th>
                            <td>2014.10 ~ 2014.12</td>
                            <td>한국스포츠개발원</td>
                            <td><a href="https://www.kosmes.or.kr/nsh/map/main.do" target="_blank" rel="noopener noreferrer">https://www.kosmes.or.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">한국스포츠개발원 경기력진단시스템</th>
                            <td>2014.08 ~ 2014.10</td>
                            <td>한국스포츠개발원</td>
                            <td>관리자시스템(부트스트랩)</td>
                        </tr>
                        <tr>
                            <th scope="row">병무청 음성동보시스템</th>
                            <td>2014.07 ~ 2014.07</td>
                            <td>정부대전청사</td>
                            <td>관리자시스템</td>
                        </tr>
                        <tr>
                            <th scope="row">전국화물공제조함 Smart Portal 시스템 </th>
                            <td>2014.04 ~ 2014.06</td>
                            <td>전국화물공제조합</td>
                            <td>관리자시스템</td>
                        </tr>
                        <tr>
                            <th scope="row">서울특별시청 (다국어사이트)</th>
                            <td>2013.10 ~ 2014.03</td>
                            <td>서울시청</td>
                            <td><a href="http://english.seoul.go.kr" target="_blank" rel="noopener noreferrer">http://english.seoul.go.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">지엔코 모바일</th>
                            <td>2013.09 ~ 2013.09</td>
                            <td>지엔코</td>
                            <td><a href="http://m.gncostyle.com/" target="_blank" rel="noopener noreferrer">http://m.gncostyle.com</a></td>
                        </tr>
                        <tr>
                            <th scope="row">캐논 코리아 비지니스 웹 <span className="t_red">[웹접근성취득]</span></th>
                            <td>2013.05 ~ 2013.08</td>
                            <td>Canon</td>
                            <td><a href="https://kr.canon/" target="_blank" rel="noopener noreferrer">https://kr.canon</a></td>
                        </tr>
                        <tr>
                            <th scope="row">캐논 코리아 비지니스 모바일</th>
                            <td>2013.05 ~ 2013.08</td>
                            <td>Canon</td>
                            <td><a href="https://m.kr.canon/main" target="_blank" rel="noopener noreferrer">https://m.kr.canon</a></td>
                        </tr>
                        <tr>
                            <th scope="row">아큐브</th>
                            <td>2013.03 ~ 2013.04</td>
                            <td>ACUVUE</td>
                            <td><a href="https://www.acuvue.co.kr" target="_blank" rel="noopener noreferrer">https://www.acuvue.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">마임 비전빌리지</th>
                            <td>2013.02 ~ 2013.02</td>
                            <td>Maiim</td>
                            <td><a href="http://www.maiimvisionvillage.co.kr/" target="_blank" rel="noopener noreferrer">http://www.maiimvisionvillage.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">빙그레(글로벌)</th>
                            <td>2013.01 ~ 2013.01</td>
                            <td>빙그레</td>
                            <td><a href="http://eng.bing.co.kr/" target="_blank" rel="noopener noreferrer">http://eng.bing.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">서울반도체</th>
                            <td>2012.09 ~ 2012.10</td>
                            <td>서울반도체</td>
                            <td><a href="http://www.seoulsemicon.co.kr/kr/" target="_blank" rel="noopener noreferrer">http://www.seoulsemicon.co.kr/</a></td>
                        </tr>
                        <tr>
                            <th scope="row">군선생</th>
                            <td>2012.08 ~ 2012.08</td>
                            <td>군선생</td>
                            <td><a href="http://www.kunsunsaeng.co.kr" target="_blank" rel="noopener noreferrer">http://www.kunsunsaeng.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">대진디엠피</th>
                            <td>2012.07 ~ 2012.07</td>
                            <td>대진디엠피</td>
                            <td><a href="http://www.daejindmp.co.kr/" target="_blank" rel="noopener noreferrer">http://www.daejindmp.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">세연디에스</th>
                            <td>2012.06 ~ 2012.06</td>
                            <td>세연디에스</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">커피베이</th>
                            <td>2012.05 ~ 2012.05</td>
                            <td>커피베이</td>
                            <td><a href="https://www.coffeebay.com/" target="_blank" rel="noopener noreferrer">https://www.coffeebay.com</a></td>
                        </tr>
                        <tr>
                            <th scope="row">콤비코리아 웹&amp;모바일</th>
                            <td>2012.04 ~ 2012.05</td>
                            <td>Combi</td>
                            <td><a href="http://www.combi.co.kr/main/index.php" target="_blank" rel="noopener noreferrer">http://www.combi.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">샤라샤라</th>
                            <td>2012.03 ~ 2012.03</td>
                            <td>SharaShara</td>
                            <td><a href="http://www.coscos.co.kr" target="_blank" rel="noopener noreferrer">http://www.coscos.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">아테미</th>
                            <td>2012.02 ~ 2012.03</td>
                            <td>Atemi</td>
                            <td><a href="https://starsports.co.kr" target="_blank" rel="noopener noreferrer">https://starsports.co.kr</a></td>
                        </tr>
                        <tr>
                            <th scope="row">치킨매니아</th>
                            <td>2012.01 ~ 2012.02</td>
                            <td>치킨매니아</td>
                            <td><a href="http://www.cknia.com/" target="_blank" rel="noopener noreferrer">http://www.cknia.com</a></td>
                        </tr>
                        <tr>
                            <th scope="row">ISU 이수페타시스</th>
                            <td>2012.01 ~ 2012.01</td>
                            <td>이수페타시스</td>
                            <td><a href="http://www.petasys.com" target="_blank" rel="noopener noreferrer">http://www.petasys.com</a></td>
                        </tr>
                        <tr>
                            <th scope="row">홈페이지 유지관리</th>
                            <td>2010.10 ~ 2011.05</td>
                            <td>보라웹</td>
                            <td>미고성형외과, 베스트덴 치과, 아트라인성형외과, 노원연세성형외과, 아트라인 성형외과, 가이드 치과, 바운스월드, 에어키즈랜드, 리더스아카데미, 투어콘서트, 서울이라인</td>
                        </tr>
                        <tr>
                            <th scope="row">홈페이지 유지관리</th>
                            <td>2009.07 ~ 2010.05</td>
                            <td>인포지션</td>
                            <td>퀴즈노스, 아트앤하트, 한국리츠협회, 경동오토, 끄레모소, 수필름, 맨앤펫, 인포지션. 한국자동차학원, 다수의 보험사이트</td>
                        </tr>
                        <tr>
                            <th scope="row">쇼핑몰 유지관리</th>
                            <td>2007.12 ~ 2009.03</td>
                            <td>슈퍼몽</td>
                            <td>11번가, G마켓, 옥션, 오픈마켓 쇼핑몰 관리 및 디자인</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>모바일에서 가로 스크롤 사용시 테이블 내용을 확인 가능합니다.</p>
        </div>
    </section>


  )
}
export default ProjectList

