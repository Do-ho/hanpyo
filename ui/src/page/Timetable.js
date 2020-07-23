import React, { Component } from 'react';
import '../App.css';
import './border.css';
import {WEEK_NAME} from "../constants/timedata";
import {test_data} from "../constants/testdata";
import {COLOR_SET} from "../constants/color";


class timetable extends Component {
  constructor() {
    super();
    this.state = {
      info: test_data,
      selected_lecture: {},
      basket_lecture: [],
      search_text: "",
      days: [
        ["01A", "09:00",0,0,0,0,0],
        ["01B", "09:30",0,0,0,0,0],
        ["02A", "10:00",0,0,0,0,0],
        ["02B", "10:30",0,0,0,0,0],
        ["03A", "11:00",0,0,0,0,0],
        ["03B", "11:30",0,0,0,0,0],
        ["04A", "12:00",0,0,0,0,0],
        ["04B", "12:30",0,2,0,0,0],
        ["05A", "13:00",0,3,0,0,0],
        ["05B", "13:30",0,3,0,0,0],
        ["06A", "14:00",0,4,0,0,0],
        ["06B", "14:30",0,0,0,0,0],
        ["07A", "15:00",0,0,0,0,0],
        ["07B", "15:30",0,0,0,0,0],
        ["08A", "16:00",0,0,0,0,0],
        ["08B", "16:30",0,0,0,0,0],
        ["09A", "17:00",0,0,0,0,0],
        ["09B", "17:30",0,0,0,0,0],
      ],
      color: 0,
    }
      text: [
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
      ]
    }
  }
  start_rows = (obj, i) => { return ((obj.time[i].start%1440)-540)/30; }
  start_cols = (obj, i) => { return Math.floor(obj.time[i].start/1440) + 2; }
  end_rows = (obj, i) => { return ((obj.time[i].end%1440)-540)/30; }
  end_cols = (obj, i) => { return Math.floor(obj.time[i].end/1440) + 2; }

  // border style function
  checkBorder = (vaule) => { return "border_" + vaule; }

  displayClear = () => {
    var data = this.state.days;
    for(var i=0; i<18; i++) {
      for(var j=2; j<7; j++) {
        data[i][j] = 0;
      }
    }
    this.setState({days: data});
  }

  displayBoder = (object) => {
    this.displayClear();
    for(var num=0; num<object.time.length; num++) {
      var distance = this.end_rows(object, num) - this.start_rows(object, num);
      var data = this.state.days;
      if(distance
         1) {
        data[this.start_rows(object, num)][this.start_cols(object, num)] = 5;
        this.setState({days: data})
      }
      else {
        data[this.start_rows(object, num)][this.start_cols(object, num)] = 6;
        for(var i=1; i<distance-1; i++) {
          data[this.start_rows(object, num)+i][this.start_cols(object, num)] = 7;
        }
        data[this.end_rows(object, num)-1][this.start_cols(object, num)] = 8;
      }
    }
  }

  add_basket = (object) => {
    this.displayClear();
  }
  start_rows = (obj, i) => { return ((obj.time[i].start%1440)-540)/30; }
  start_cols = (obj, i) => { return Math.floor(obj.time[i].start/1440) + 2; }
  end_rows = (obj, i) => { return ((obj.time[i].end%1440)-540)/30; }
  end_cols = (obj, i) => { return Math.floor(obj.time[i].end/1440) + 2; }

  // border style function
  checkBorder = (value) => { return "border_" + value; }

  displayClear = () => {
    var data = this.state.days;
    for(var i=0; i<18; i++) {
      for(var j=2; j<7; j++) {
        data[i][j] = 0;
      }
    }
    this.setState({days: data});
  }

  displayBoder = (object) => {
    this.displayClear();
    for(var num=0; num<object.time.length; num++) {
      var distance = this.end_rows(object, num) - this.start_rows(object, num);
      var data = this.state.days;
      if(distance===1) {
        data[this.start_rows(object, num)][this.start_cols(object, num)] = 5;
        this.setState({days: data})
      }
      else {
        data[this.start_rows(object, num)][this.start_cols(object, num)] = 6;
        for(var i=1; i<distance-1; i++) {
          data[this.start_rows(object, num)+i][this.start_cols(object, num)] = 7;
        }
        data[this.end_rows(object, num)-1][this.start_cols(object, num)] = 8;
      }
    }
  }

  

  add_basket = (object) => {
    this.displayClear();
    for(var i=0; i<object.time.length; i++) {
      // console.log(Math.floor(object.time[i].start/1440)); //열 넘버
      // console.log(object.time[i].start%1440/60-8); //01,02 인지 알려주는거
      // console.log(object.time[i].start%1440/30-18); //A, B인지 알려주는거
      
      var repeat = object.time[i].start
      
      while(repeat!==object.time[i].end) {
        console.log(repeat)
        var char_A_B = null;
        
        if((repeat%1440/30-18) % 2 === 0) char_A_B = 'A';
        else char_A_B = 'B';
        
        var test = '0'+ Math.floor(repeat%1440/60-8) + char_A_B +  '-' + (Math.floor(repeat/1440));
        console.log(test)
        document.getElementById(test).style.background = COLOR_SET[this.state.color];
        repeat += 30;
      }
    }
    var color = (this.state.color + 1)%10
    this.setState({color: color});
  }

  delete_basket = (object) => {
    this.displayClear();
    for(var i=0; i<object.time.length; i++) {
      // console.log(Math.floor(object.time[i].start/1440)); //열 넘버
      // console.log(object.time[i].start%1440/60-8); //01,02 인지 알려주는거
      // console.log(object.time[i].start%1440/30-18); //A, B인지 알려주는거


      var repeat = object.time[i].start

      while(repeat!==object.time[i].end) {
        console.log(repeat)
        var char_A_B = null;
        
        if((repeat%1440/30-18) % 2 === 0) char_A_B = 'A';
        else char_A_B = 'B';
        
        var test = '0'+ Math.floor(repeat%1440/60-8) + char_A_B +  '-' + (Math.floor(repeat/1440));
        console.log(test)
        document.getElementById(test).style.background = 'white';
        repeat += 30;
      }
    }
  }

  // 강의 찾기 중 클릭 시
  // 빨간 테두리
  handlingSelect(selected) {
    if (selected.code !== this.state.selected_lecture.code) {
      this.setState({ selected_lecture: selected });
      this.displayBoder(selected);
    } else {
      this.setState({ selected_lecture: {} });
    }
  }

  // 강의 찾기 중 더블 클릭 시
  // 장바구니에 담김
  handlingDoubleClick(selected) {
    if(this.check_add(selected)) {
      this.add_basket(selected);
      const newbasket = [
        ...this.state.basket_lecture,
        selected,
      ]
      for(var i=0; i<this.state.basket_lecture.length; i++) {
        if(this.state.basket_lecture[i].code===selected.code){
          return ;
        }
      }
      this.setState({basket_lecture: newbasket})  
    }
  }

  handlingBasketDoubleClick(selected) {
    const newbasket = this.state.basket_lecture.filter(
      data => data.code !== selected.code
    );
    this.displayClear();
    this.setState({basket_lecture: newbasket})
    this.delete_basket(selected);
  }

  check_add = (object) => {
    for(var i=0; i<object.time.length; i++) {
      for(var j=0; j<this.state.basket_lecture.length; j++) {
        for(var k=0; k<this.state.basket_lecture[j].time.length; k++) {
          if(object.time[i].start>=this.state.basket_lecture[j].time[k].start && object.time[i].start<=this.state.basket_lecture[j].time[k].end) {
            alert("시간이 중복됩니다.");
            return false;
          }
          if(object.time[i].end>=this.state.basket_lecture[j].time[k].start && object.time[i].end<=this.state.basket_lecture[j].time[k].end) {
            alert("시간이 중복됩니다.");
            return false;
          }
        }
      }
    }
    return true;
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const init_table_header = WEEK_NAME.map((week)=>
      <td className='timetable_header'>{week}</td>
    )

    const init_table_body = this.state.days.map((data)=>
      <tr>
        <td className='timetable_body'>{data[0]}</td>
        <td className='timetable_body'>{data[1]}</td>

        <td id={data[0] + "-0"} className={"timetable_td " + this.checkBorder([data[2]])}>
        </td>
        <td id={data[0] + "-1"} className={"timetable_td " + this.checkBorder([data[3]])}>
        </td>
        <td id={data[0] + "-2"} className={"timetable_td " + this.checkBorder([data[4]])}>
        </td>
        <td id={data[0] + "-3"} className={"timetable_td " + this.checkBorder([data[5]])}>
        </td>
        <td id={data[0] + "-4"} className={"timetable_td " + this.checkBorder([data[6]])}>
        </td>

      </tr>
    ) 

    const load_lecture_data = this.state.info.reduce(
      (result, value) => {
        for(var i=0; i<this.state.basket_lecture.length; i++) {
          if(value.code===this.state.basket_lecture[i].code) {
            return result;
          }
        }
        if(this.state.search_text!=='') {
          if(value.code.indexOf(this.state.search_text) > -1 ||
             value.lecture_name.indexOf(this.state.search_text) > -1 ||
             value.professor.indexOf(this.state.search_text) > -1
          ) {
            result.push(value)
          }
        }
        else {
          result.push(value);
        }
        return result;
      }, []
    ).map((data) => 
        <tr key = {data.code}
          className={this.state.selected_lecture.code === data.code ? "find_lecture_tr lecture_selected" : "find_lecture_tr"}
          onClick={this.handlingSelect.bind(this, data)}
          onDoubleClick={this.handlingDoubleClick.bind(this, data)}
        >
        <td width='60rem' className='find_lectures'>{data.code}</td>
        <td width='160rem' className='find_lectures'>{data.lecture_name}</td>
        <td width='40rem' className='find_lectures'>{data.class}</td>
        <td width='60rem' className='find_lectures'>{data.professor}</td>
        <td width='40rem' className='find_lectures'>{data.grade}</td>
        <td width='40rem' className='find_lectures'>{data.personnel}</td>
        <td width='160rem'>{data.department}</td>
      </tr>
    )

    /* 장바구니 데이터 */
    const load_basket_data = this.state.basket_lecture.map((data) =>
    <tr key = {data.code}
      className={this.state.selected_lecture.code === data.code ? "find_lecture_tr lecture_selected" : "find_lecture_tr"}
      onClick={this.handlingSelect.bind(this, data)}
      onDoubleClick={this.handlingBasketDoubleClick.bind(this, data)}
    >
        <td width='60rem' className='find_lectures'>{data.code}</td>
        <td width='160rem' className='find_lectures'>{data.lecture_name}</td>
        <td width='40rem' className='find_lectures'>{data.class}</td>
        <td width='60rem' className='find_lectures'>{data.professor}</td>
        <td width='40rem' className='find_lectures'>{data.grade}</td>
        <td width='40rem' className='find_lectures'>{data.personnel}</td>
        <td width='160rem'>{data.department}</td>
      </tr>
    )

    const draw_basket_data = this.state.basket_lecture.map((data) =>
      <div className='timetable_infos'
        style={{
          top: data.time[0].start%1440-540+(50),
          left: Math.floor(data.time[0].start/1440)*71+(122),
        }}
          >{Math.floor(data.time[0].start/1440)}</div>
    )

    return (
        <div className='container'>
          <div className='box' >
            {/* 공지사항 */}
            <div className='notice'>
              <h3 className='notice_position'><img className = 'notice_icon' alt='#' src={require('../img/notice_icon.jpg')}/>공지사항</h3>
            </div>

            {/* 시간표 */}
            <div className='table_container'>
              <h3 className='timetable_tab'>시간표1　|　시간표2　|　시간표3　<img className = 'tab_icon' alt='#' src={require('../img/tab_plus.png')}></img></h3>
              <div style={{position:'relative'}}>
                {/* {draw_basket_data} */}
                <table className='timetable'>
                  <td className='timetable_header timetable_time'></td>
                  <td className='timetable_header timetable_time'></td>
                  {init_table_header}
                  {init_table_body}
                  <tr>
                    <td className='timetable_time' colSpan='2' >이후</td>
                    <td className='timetable_body'></td>
                    <td className='timetable_body'></td>
                    <td className='timetable_body'></td>
                    <td className='timetable_body'></td>
                    <td className='timetable_body'></td>
                  </tr>
                </table>
              </div>
            </div>
            
            {/* 버튼 */}
            <div className='button_container'>
              <div className='button_container_cell'>
                <button className='store_button'> 저　　장 </button>
              </div>
              <div className='button_container_cell'>
                <button className='share_button'> 공　　유</button>
              </div>
            </div>
            
          </div>

          <div className='box' >
            {/* 강의찾기 */}
            <div className='find_lecture_container'>
              <h3 className='main_text'> 강의 찾기</h3>
              <hr className='main_line'/>
              <input 
                name='search_text'
                className='find_lecture_textbox'
                placeholder='검색어를 입력하세요.'
                value={this.state.search_text}
                onChange= {this.handlingChange}
              />
              <img className = 'search_icon' alt='#' src={require('../img/search.png')}/>
              
              <div className = 'find_lecture_container_table'> 
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>개설학부</option>
                    <option>컴공</option>
                    <option>기계</option>
                    <option>전전통</option>
                    <option>에신화</option>
                    <option>산경</option>
                    <option>메카</option>
                    <option>디공, 건축</option>
                    <option>교양</option>
                    <option>HRD</option>
                    <option>융합</option>
                  </select>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>요　일</option>
                    <option>월요일</option>
                    <option>화요일</option>
                    <option>수요일</option>
                    <option>목요일</option>
                    <option>금요일</option>
                  </select>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>학　점</option>
                    <option>0학점</option>
                    <option>1학점</option>
                    <option>2학점</option>
                    <option>3학점</option>
                    <option>4학점</option>
                  </select>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>시　간</option>
                    <option>추후 추가</option>
                  </select>
                </div>
                <div className='find_lecture_container_table_cell'>
                  <h2>~</h2>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>시　간</option>
                    <option>추후 추가</option>
                  </select>
                </div>
              </div>

              <div className='find_lecture_table_container'>
                <table className='find_lecture_table'>
                  <tr className='find_lecture_th' style={{position: "relative", top: 0}}>
                    <td className='find_lectures'>코드</td>
                    <td className='find_lectures'>강의명</td>
                    <td className='find_lectures'>분반</td>
                    <td className='find_lectures'>교수</td>
                    <td className='find_lectures'>대상</td>
                    <td className='find_lectures'>정원</td>
                    <td >개설학부</td>
                  </tr>
                  {load_lecture_data}
                </table>
              </div>
            </div>

            {/* 나만의 시간표 추가 */}
            <div className='add_custom_container'>
              <h3 className='main_text'> 나만의 시간표 추가</h3>
              <hr className='main_line add_custom_hr'/>

              <div className='add_custom_container_table'>
                <div className='add_custom_container_table_cell'>
                  <select className='select_box add_custom_select'>
                    <option>요　일</option>
                  </select>
                </div>
                <div className='add_custom_container_table_cell'>
                  <select className='select_box add_custom_select'>
                    <option>시　간</option>
                  </select>
                </div>
                <div className='add_custom_container_table_cell'>
                  <h2>~</h2>
                </div>
                <div className='add_custom_container_table_cell'>
                  <select className='select_box add_custom_select'>
                    <option>시　간</option>
                  </select>
                </div>
                <div className='add_custom_container_table_cell'>
                  <input
                    type='text'
                    className='add_custom_textbox'
                    placeholder='이름을 입력해주세요. ex) 근장'
                  />
                </div>
                <div className='add_custom_container_table_cell'>
                  <button className='add_custom_button'>
                    추  가
                  </button>
                </div>
              </div>
            </div>
            {/* 장바구니 */}
            <div className='basket_container'>
              <h3 className='main_text'> 장바구니</h3>
              <hr className='main_line'/>
              
              <div className='basket_table'>
                <table className='find_lecture_table'>
                  <tr className='find_lecture_th'>
                    <td className='find_lectures'>코드</td>
                    <td className='find_lectures'>강의명</td>
                    <td className='find_lectures'>분반</td>
                    <td className='find_lectures'>교수</td>
                    <td className='find_lectures'>대상</td>
                    <td className='find_lectures'>정원</td>
                    <td >개설학부</td>
                  </tr>
                  {load_basket_data}
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default timetable;
