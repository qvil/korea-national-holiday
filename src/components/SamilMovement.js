import React, { Component } from 'react';
import { MediaCard } from 'components';
import image from '../images/Independence_movement_day.jpg';

class SamilMovement extends Component {
  render() {
    return (
      <MediaCard
        headline="3·1절"
        image={image}
        imageTitle="SamilMovement"
        p="3·1절(三一節, 영어: The March 1st Movement / Sam-il Movement)은 1919년 3월 1일에 일어난 3·1 운동을 기념하여 제정된 대한민국의 국경일[1]이자 공휴일이다. 1946년 3월 1일 제27회 기념식을 시초로 국가 경축일로 지정되었다.[2] 1949년 10월 1일 <국경일에관한법률>을 공포함으로써 국경일로 지정되었고, 2005년 12월 29일 <국경일에 관한 법률>로 개정되어 지금에 이른다. 이 날에는 정부가 추모행사를 주최하여 순국선열에 대한 추모와 애도의 묵념을 올리며, 민족정신을 되새긴다. 3부 요인은 물론 각계각층의 유명인사들이 모여 기념식을 거행하며, 나라의 광복을 위해 싸우다가 순국한 선열들의 유족 및 애국운동가들로 구성된 광복회 회원들은 따로 파고다 공원에 모여 그 날의 깊은 뜻을 되새기는 의식을 거행한다. 이 날에는 전국 관공서 및 각 가정에서 대한민국의 국기인 태극기를 게양한다. 한편, 조선민주주의인민공화국에서는 휴식일로 지정되어 있지 않다. - 출처: 위키백과 -"
      />
    );
  }
}

export default SamilMovement;