$(document).ready(function(){
  //モーダル表示
  $('.modal').fadeIn();

  //クリア時モーダルを非表示
  $('.clear_modal').hide();

  //セレクトボックス
  $(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function() {
        $('html').one('click',function() {
          $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
      });
    $(".custom-option").on("click", function() {
      $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });


  //モーダルで設定した難易度・問題数情報
    var difficulty
    var number

  //モーダル上のSTARTボタン押下
  $('.modal_close').click(function(){
    $('.modal').fadeOut();
    $('.overlay').fadeOut();
    $('.name').hide();
    number = $('[name=number]').val();
    difficulty = $('[name=difficulty]').val();

    //設定値
    var range = 0;
    if(difficulty == "初級"){
      range = 20;
      for(var i=21; i<=118; i++){
        $('#no'+i).hide();
        $('#no'+i).parent().css('border-color','#ffffff');
        $('#Lantanoid').hide();
        $('#Lantanoid').parent().css('border-color','#ffffff');
        $('#Actinoid').hide();
        $('#Actinoid').parent().css('border-color','#ffffff');
      }
    }else if(difficulty == "中級") {
      range = 40;
      for(var i =41; i<=118; i++){
        $('#no'+i).hide();
        $('#no'+i).parent().css('border-color','#ffffff');
        $('#Lantanoid').hide();
        $('#Lantanoid').parent().css('border-color','#ffffff');
        $('#Actinoid').hide();
        $('#Actinoid').parent().css('border-color','#ffffff');
      }
    }else if(difficulty == "上級"){
      range = 118;

    }else if(difficulty == "超級") {
      range = 118;
      for(var i = 1; i<=118; i++){
        $('#no' + i).hide();
      }
    }
    //重複のない乱数を生成
      randoms = [];
      var min = 1;
      var max = range;

      for(i = min; i <= max; i++){
        while(true){
          var tmp = intRandom(min, max);
          if(!randoms.includes(tmp)){
            randoms.push(tmp);
            break;
          }
        }
      }
  }); //モーダル上のSTARTボタン押下内処理ここまで

//乱数生成
  function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
  }

//時間経過処理用グローバル変数
  var start;
  var sec;
  var datet = 0;
  var counter = 60;


  function dispSec(){
    now = new Date();
    datet = parseInt((now.getTime() - start.getTime()) / 1000);
    sec = datet % 61;
    if(sec >= counter){
      $('.time').text(sec);
      //ストップ処理
      clearInterval(interval_array[0]);
      interval_id = 0;
    }else{
      $('.time').text(sec);
      //ヒントの追加表示
      if(sec == 10){
        $('.hint2').text(elementsData[0].hint2)
      }else if (sec == 20) {
        $('.hint3').text(elementsData[0].hint3)
      }
    }
  }

//得点計算用グローバル変数
  var interval_id
  var interval_array = [];
  var number_count = 0;
  var randoms
  var id
  var scorePoint
  var elementsData
  var btn_click_count
  var maru_count = 0;
  var batsu_count = 0;

//ゲームのSTARTボタン押下時処理
  $('.btn').on('click',function() {
    //時間表示枠に0を表示
    $('.time').text(0);

    //経過秒数表示
    start = new Date();
    interval_id = setInterval(dispSec,1000);

    //id初期化
    interval_array = [];
    interval_array.push(interval_id);

    //前に表示されていたヒントを消す
    $('.hint1').text('');
    $('.hint2').text('');
    $('.hint3').text('');

    //ランダムに出題する
    id = randoms[number_count]
    elementsData = selectElements(data,id);
    if(number_count == number){
      //出題終了
      console.log('終了');
      clearInterval(interval_array[0]);
      //クリア時モーダルの設定
      $('.clear_modal_difficulty').text(difficulty);
      $('.clear_modal_number').text(number +'問');
      $('.clear_modal_max').text(Number(number * 10)+'pt');
      $('.clear_modal_point').text(scorePoint +'pt');
      $('.clear_modal_maru').text(maru_count +'問');
      $('.clear_modal_batsu').text(batsu_count +'問');

      //クリア時モーダルの表示
      $('.overlay').fadeIn();
      $('.clear_modal').fadeIn();

      //クリア時モーダルの閉じるボタン
      $('.close_btn').click(function(){
        document.location.reload();
      });
      //$('.close_btn').click(document.location.reload());
    }else if (number_count <= number) {
      //出題処理
      number_count = number_count +1;
      $('.number_now').text(number_count);
      $('.hint1').text(elementsData[0].hint1);
    }
    //現在のスコア取得
    scorePoint = $('.score').text();

    //正解クリックカウントを初期化
    btn_click_count=0;
  });

//元素クリック時処理
  $("[id^='no']").parent().on('click',function(){
    //解答済みの問題について処理しない
    if(btn_click_count==0){

      var element_name = $(this).children('.name').text();
      //正解の場合の処理
      if(element_name== elementsData[0].name){

        //背景色変更
        $(this).css('background-color','#a3d6cc');

        //元素名表示
        $(this).children('.name').show();

        //経過時間カウントを止める
        clearInterval(interval_array[0]);
        interval_id = 0

        //得点を計算して表示
        if($('.hint3').text() != ""){
          //hint3まで表示されてる場合:+3pt
          scorePoint = Number(scorePoint)+ 3;
          $('.score').text(scorePoint);
        }else if ($('.hint2').text() != "") {
          //hint2まで表示されてる場合:+5pt
          scorePoint = Number(scorePoint) + 5;
          $('.score').text(scorePoint);
        }else{
          //hint1まで表示されてる場合:+10pt
          scorePoint = Number(scorePoint) + 10;
          $('.score').text(scorePoint);
          }
      //一度正解したら押せないようにする
      btn_click_count = 1;
      maru_count = maru_count + 1;

      //不正解時の処理
      }else{
        //間違ったところをクリックすると-1pt.
        scorePoint = Number(scorePoint) - 1;
        $('.score').text(scorePoint);
        batsu_count = batsu_count + 1;
      }
    }else{
      alert('解答済みです。次の問題へ進んでください。')
    }
  }); //元素クリック時処理終了

  //JSONデータから該当の元素データを取得
  const selectElements = function(jsonDatas,id){
    let selecterJsonDatas =
      jsonDatas.filter((jsonData) => {
        return Number(jsonData['id']) == Number(id);
      });
        return selecterJsonDatas
  }

}); //document.ready内
