var data=[
  {
    'id':1,
    'name':'水素',
    'symbol':'H',
    'hint1':'1766年にヘンリー・キャベンディッシュが発見し，当時は「フロギストン気」と名付けられていた。',
    'hint2':'137億年前にビッグバンでできた最初の原子であると考えられている。',
    'hint3':'可燃性の気体で，燃焼時に水を生じる，一番軽い。'
  },
  {
    'id':2,
    'name':'ヘリウム',
    'symbol':'He',
    'hint1':'1866年にイギリスの天文学者ノーマン・ロッキャーが太陽光の中から発見した。',
    'hint2':'1911年にカマリン・オンネスが液化に成功し，「超伝導」の発見に繋がった。',
    'hint3':'水素の次に軽くて，宇宙の中で水素の次に多くて，吸うと声が高くなる。'
  },
  {
    'id':3,
    'name':'リチウム',
    'symbol':'Li',
    'hint1':'うつ病の治療薬として用いられることがある，必須元素の1つ。',
    'hint2':'レアメタルで，世界の総産出量の35％がチリで算出されるほか，ボリビアにも多く埋蔵されていることがわかっている。',
    'hint3':'金属の中ではもっとも軽く，水に浮く。これを用いた電池は起電力が高く多くの電子機器のエネルギー源として使われる。'
  },
  {
    'id':4,
    'name':'ベリリウム',
    'symbol':'Be',
    'hint1':'1797年にフランスの化学者ルイ・ニコラ・ヴォークランが発見した。毒性が強く，肺に入ると重篤な慢性肺疾患を引き起こし，肺がんに至ることもある。',
    'hint2':'アルミニウムとの合金が軽くて強度が高いため，航空機の機体やF-1レースの車体などに用いられる。',
    'hint3':'鉱物学的には「ベリル」と呼ばれている，エメラルドとアクアマリンに含まれている。'
  },
  {
    'id':5,
    'name':'ホウ素',
    'symbol':'B',
    'hint1':'1808年にフランスのゲイ＝リュサックとルイ・テナールが共同で発見して単離に成功した。',
    'hint2':'ケイ素と混ぜるとｐ型半導体になって太陽電池の原料になる。原子炉の制御棒の原料としても使われている。',
    'hint3':'黒い固体で，単体としてはダイヤモンドの次に硬い。炭素と結合すると全物質中で2番目に硬い物質になる。'
  },
  {
    'id':6,
    'name':'炭素',
    'symbol':'C',
    'hint1':'',
    'hint2':'',
    'hint3':'生命体を構成する化合物・有機物の主構成元素。地球上でもっとも硬いダイヤモンドもこれ。'
  },
  {
    'id':7,
    'name':'窒素',
    'symbol':'N',
    'hint1':'1772年にスコットランドのダニエル・ラザフォードが単体分離に成功した。この気体に「有毒な空気」と名付けた。',
    'hint2':'石炭，石油などの化学燃料にも含まれ，燃焼して出るこれの酸化物をまとめてNOx（ノックス）と呼ぶ。',
    'hint3':'空気の5分の4を占める気体。英語名Nitrogenの由来はギリシャ語のNitron（硝石）とGennen（作る）に由来する。'
  },
  {
    'id':8,
    'name':'酸素',
    'symbol':'O',
    'hint1':'1774年にプリーストリーが分離に成功した気体で，「脱フロギストン空気」と命名された。',
    'hint2':'クラーク数（地殻に含まれる元素の濃度を表した数値）がもっとも多く，他の元素と結合する力が強い。',
    'hint3':'これが他の元素と結合することを「酸化」という。植物が光合成で排出する気体。'
  },
  {
    'id':9,
    'name':'フッ素',
    'symbol':'F',
    'hint1':'1906年にフランスの化学者モアッサンがホタル石からの単離に成功してノーベル化学賞を受賞した。',
    'hint2':'淡黄色の気体で反応性が高く，ヘリウムとネオン以外のすべての元素と化合物を作ることができる。',
    'hint3':'フライパンなどの表面にコーティングするテフロン加工のテフロンのもと。'
  },
  {
    'id':10,
    'name':'ネオン',
    'symbol':'Ne',
    'hint1':'',
    'hint2':'液体空気を分留することで得られる。レーザー発振に利用される。',
    'hint3':'ガラス管に封じ込めて電流を流すと赤く発光する希ガス元素。'
  },
  {
    'id':11,
    'name':'ナトリウム',
    'symbol':'Na',
    'hint1':'',
    'hint2':'',
    'hint3':''
  },
  {'id':12,'name':'マグネシウム','symbol':'Mg','hint1':'','hint2':'','hint3':''},
  {'id':13,'name':'アルミニウム','symbol':'Al','hint1':'','hint2':'','hint3':''},
  {'id':14,'name':'ケイ素','symbol':'Si','hint1':'','hint2':'','hint3':''},
  {'id':15,'name':'リン','symbol':'P','hint1':'','hint2':'','hint3':''},
  {'id':16,'name':'硫黄','symbol':'S','hint1':'','hint2':'','hint3':''},
  {'id':17,'name':'塩素','symbol':'Cl','hint1':'','hint2':'','hint3':''},
  {'id':18,'name':'アルゴン','symbol':'Ar','hint1':'','hint2':'','hint3':''},
  {'id':19,'name':'カリウム','symbol':'K','hint1':'','hint2':'','hint3':''},
  {'id':20,'name':'カルシウム','symbol':'Ca','hint1':'','hint2':'','hint3':''}
]

$(document).ready(function(){
  //モーダル表示
  $('.modal').fadeIn();

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

  //モーダル上のSTARTボタン押下
  $('.modal_close').click(function(){
    $('.modal').fadeOut();
    $('.overlay').fadeOut();
  }); //モーダル上のSTARTボタン押下内処理ここまで

//モーダルで設定した難易度・問題数情報
  var difficulty = $('[name=difficulty]').val();
  var number = $('[name=number]').val();

  //設定値
  var range = 0;
  if(difficulty == "Beginner"){
    range = 20;
  }else if(difficulty == "Intermediate") {
    range = 40;
  }else if(difficulty == "Advanced" || difficulty == "Maniac") {
    range = 118;
  }

//重複のない乱数を生成
  var randoms = [];
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
  function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
  }


//時間経過処理
  var start = new Date();
  var sec = 0;
  var datet = 0;
  var counter = 10;

  function dispSec(){
    now = new Date();
    datet = parseInt((now.getTime() - start.getTime()) / 1000);
    sec = datet % 60;
    if(sec == counter){
      //stop処理
    }else{
      $('.time').text(sec);
      setInterval(dispSec(),1000);
    }
  }

  var number_count = 0;
//ゲームのSTARTボタン押下時処理
  $('.btn').on('click',function() {
    //経過秒数表示

    //ランダムに出題する
    var id = randoms[number_count]
    if(number_count == number){
      console.log('終了');
    }else if (number_count <= number) {
      number_count = number_count +1;
      $('.number_now').text(number_count);
      console.log(id)
      console.log(data[id].name)
      $('.hint1').text(data[id].hint1);
    }
  });


}); //document.ready内
