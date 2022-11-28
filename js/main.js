$(document).ready(function(){
    //스크롤시 헤더 색상 변경 S
    $(window).on('scroll', function(){
        if($(this).scrollTop()>=50){
            $('header').addClass('hdrBg');
        }else{
            $('header').removeClass('hdrBg');
        }
    });

    $(window).on('scroll', function(){
        if($(this).scrollTop()>=50){
            $('.mobile_logo img').attr('src', './img/logo.png');
        }else{
            $('.mobile_logo img').attr('src', './img/logo_wh.png');
        }
    });
    //스크롤시 헤더 색상 변경 E


    //모바일 메뉴 로고 호버시 이미지 변경 S
    $('.mgnb>li:first').mouseover(function(){
        $(this).find('img').attr('src', './img/patterns_ch.png');;
    });
    $('.mgnb>li:first').mouseleave(function(){
        $(this).find('img').attr('src', './img/logo.png');
    });
    //모바일 메뉴 로고 호버시 이미지 변경 E


    //메뉴 클릭시 해당 영역으로 이동 S
    $('.scroll_move').on('click', function(event){
        event.preventDefault();
        x = $(this).attr('href');
        $('html, body').animate({scrollTop:$(x).offset().top - 130},300);
    });
    //메뉴 클릭시 해당 영역으로 이동 E


    //메인 비주얼 화살표 클릭시 아래로 이동 S
    $('#scroll_down').on('click', function(event){
        var con1 = $('#content1');
        event.preventDefault();
        $('html, body').animate({scrollTop:con1.offset().top},300);
    });
    //메인 비주얼 화살표 클릭시 아래로 이동 E


    //메인 비주얼 텍스트 타이핑 효과 S
    const $text = document.querySelector(".vtxt");
    // 글자 모음
    const letters = [
        "HTML",
        "CSS", 
        "JavaScript"
    ];
    // 글자 입력 속도
    const speed = 100;
    let i = 0;
    // 타이핑 효과
    const typing = async () => {  
    const letter = letters[i].split("");
    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
    }
    // 잠시 대기
    await wait(800);
    // 지우는 효과
    remove();
    }
    // 글자 지우는 효과
    const remove = async () => {
    const letter = letters[i].split("");
    
    while (letter.length) {
        await wait(speed);

        letter.pop();
        $text.innerHTML = letter.join(""); 
    }
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i+1] ? 0 : i + 1;
        typing();
    }
    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }
    // 초기 실행
    setTimeout(typing, 1500);
    //메인 비주얼 텍스트 타이핑 효과 E


    //모바일 네비 S
    $('.bar').on('click', function(){
        $('html, body').addClass('on');
        $('.mobile_nav').addClass('on');
        $('.mgnb').stop().animate({right:0});
    });
    $('.close_btn').on('click', function(){
        $('html, body').removeClass('on');
        $('.mobile_nav').removeClass('on');
        $('.mgnb').stop().animate({right:-200 + '%'});
    });
    $('.mask').on('click', function(){
        $('html, body').removeClass('on');
        $('.mobile_nav').removeClass('on');
        $('.mgnb').stop().animate({right:-200 + '%'});
    });
    //모바일 네비 E


    //하단 스크롤 탑 버튼 S
    $(window).on('scroll', function(){
        if($(this).scrollTop()>=100){
            $('.top_btn').stop().animate({right:0},100);
        }else{
            $('.top_btn').stop().animate({right:-100 + '%'},100);
        }
    });
    $('.top_btn').click(function(e) {
        $('html, body').animate({scrollTop: 0}, 300);
    });
    //하단 스크롤 탑 버튼 E


    //스크롤시 탭메뉴 하단으로 이동 S
    
    //스크롤시 탭메뉴 하단으로 이동 E
});