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
    'hint1':'有史以前から存在は知られており，古代エジプトではピラミッド内の空気を抜くために木を熱する方法が行われていた。',
    'hint2':'融点や昇華を起こす温度は全元素の中でもっとも高い。常圧下では融点を持たず、三重点は10.8±0.2MPa、4,600±300Kであり、昇華は約3,900Kで起こる',
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
    'hint1':'イギリスの化学者ラムゼーと，トラバースが液体空気を分留す過程で発見した。',
    'hint2':'液体空気を分留することで得られる。レーザー発振に利用される。',
    'hint3':'ガラス管に封じ込めて電流を流すと赤く発光する希ガス元素。'
  },
  {
    'id':11,
    'name':'ナトリウム',
    'symbol':'Na',
    'hint1':'1807年にイギリスの化学者ハンフリー・デービーが単離に成功したあと，ゲイ＝リュサックが元素であることを証明した。',
    'hint2':'水と発熱的に反応し，水素を発生させる。発熱で水素に火がつき，爆発的な反応となるため非常に危険。',
    'hint3':'海水を原料として，電気分解で安価に製造できるので，大量供給が可能。ソーダ工業と呼ばれて発展している。'
  },
  {
    'id':12,
    'name':'マグネシウム',
    'symbol':'Mg',
    'hint1':'1808年にイギリスの化学者ハンフリー・デービーが単離に成功し，金属元素であることが証明された。',
    'hint2':'塩素との化合物が海水中に約0.5％含まれており，この化合物はニガリとして豆腐の製造に使われる。',
    'hint3':'クロロフィルに含まれ，光合成において光のエネルギーを吸収し，他の分子に渡す働きをする。'
  },
  {
    'id':13,
    'name':'アルミニウム',
    'symbol':'Al',
    'hint1':'デンマークの物理学者ハンス・クリスチャン・エールステッドが単離に成功して発見した。',
    'hint2':'その化合物であるミョウバンから礬素，軽くて銀に似ていることから軽銀とも呼ばれる。',
    'hint3':'軽く，熱伝導に優れているため高圧線に用いられたり，銅などとの合金ジュラルミンなど軽くて強い合金を作ることができる。'
  },
  {
    'id':14,
    'name':'ケイ素',
    'symbol':'Si',
    'hint1':'1824年スウェーデンの化学者ベルセーリウスが単離に成功した。ベルセーリウスは，アルファベットを使った元素記号表記法を提案した人物でもある。',
    'hint2':'暗灰色の硬い個体で，砂や岩石として近く中に酸素と化合した状態でほぼ無尽蔵に存在する。非晶質個体（アモルファス）としてガラスに使用される。',
    'hint3':'半導体として有用な元素で，真性半導体のため不純物を加えて伝導度を上げている。携帯電話，PC，太陽電池などに使われる。'
  },
  {
    'id':15,
    'name':'リン',
    'symbol':'P',
    'hint1':'1669年にドイツの商人ヘニッヒ・ブラントが錬金術の実験中に発見した。',
    'hint2':'同素体が複数あり，白は猛毒，赤は無毒。黒は半導体の性質を持っている。',
    'hint3':'植物の三大栄養素の1つで，化学肥料の原料として高い需要がある。アデノシン三リン酸にも3個結合している。'
  },
  {
    'id':16,
    'name':'硫黄',
    'symbol':'S',
    'hint1':'紀元前から知られている元素で，古代ギリシャでは家の中の消毒に利用していたと言われる。',
    'hint2':'ゴムの加硫に用いられ，天然ゴムは分子が長い鎖状のため，弾力がない。',
    'hint3':'温泉の独特のにおいのもとはこれと水素の化合物。猛毒で空気より重く，火山地帯ではくぼ地に溜まっていることがある。'
  },
  {
    'id':17,
    'name':'塩素',
    'symbol':'Cl',
    'hint1':'1774年スウェーデンの化学者カール・ヴィルヘルム・シェーレが発生させることに成功した。',
    'hint2':'薄い緑色をした有毒性の気体で，第一次世界大戦では毒ガスとして戦場で使われた。',
    'hint3':'食塩の構成元素で，食塩を電気分解することで得られる。'
  },
  {
    'id':18,
    'name':'アルゴン',
    'symbol':'Ar',
    'hint1':'1894年にイギリスの物理学はレーリー卿とウィリアム・ラムジーが発見した。ギリシャ語の「なまけもの」という意味から命名された。',
    'hint2':'空気中にたくさんあり，窒素と酸素についで3番目に存在量がある。',
    'hint3':'希ガスの1種で，安定して反応性は乏しい。レーザーの発生源となり，主に医療用に使われる。'
  },
  {
    'id':19,
    'name':'カリウム',
    'symbol':'K',
    'hint1':'1807年にハンフリー・デービーがポタシを電気分解し単離することに成功した。',
    'hint2':'シアン化したものが体内に入ると，細胞が呼吸できなくなり死に至る。',
    'hint3':'ミネラルとして動植物の体内にあり，哺乳類では神経伝達において重要な役割を果たす。'
  },
  {
    'id':20,
    'name':'カルシウム',
    'symbol':'Ca',
    'hint1':'フランスの化学者ラヴァジェが，未知の元素の酸化物であるとして周期表に加えていた。1808年にデービーが分離に成功した。',
    'hint2':'地殻中で，鉄に次いで5番目に多い元素。化合物である生石灰は乾燥剤として用いられる。',
    'hint3':'動物の体内ではハイドロキシアパタイトとして存在し，骨や歯の成分となっている。'
  }
]

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
    number = $('[name=number]').val();
    difficulty = $('[name=difficulty]').val();

    //設定値
    var range = 0;
    if(difficulty == "Beginner"){
      range = 20;
      for(var i=21; i<=118; i++){
        $('#no'+i).hide();
        $('#no'+i).parent().css('border-color','#ffffff');
        $('#Lantanoid').hide();
        $('#Lantanoid').parent().css('border-color','#ffffff');
        $('#Actinoid').hide();
        $('#Actinoid').parent().css('border-color','#ffffff');
      }
    }else if(difficulty == "Intermediate") {
      range = 40;
      for(var i =41; i<=118; i++){
        $('#no'+i).hide();
        $('#no'+i).parent().css('border-color','#ffffff');
        $('#Lantanoid').hide();
        $('#Lantanoid').parent().css('border-color','#ffffff');
        $('#Actinoid').hide();
        $('#Actinoid').parent().css('border-color','#ffffff');
      }
    }else if(difficulty == "Advanced" || difficulty == "Maniac") {
      range = 118;
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
  var counter = 40;


  function dispSec(){
    now = new Date();
    datet = parseInt((now.getTime() - start.getTime()) / 1000);
    sec = datet % 61;
    if(sec >= counter){
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

//ゲームのSTARTボタン押下時処理
  $('.btn').on('click',function() {
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

    console.log(elementsData[0].id)
    if(number_count == number + 1){
      //出題終了
      console.log('終了');
      clearInterval(interval_array[0]);
      //スコア表示
      $('.overlay').fadeIn();
      $('.clear_modal').fadeIn();



    }else if (number_count <= number) {
      //出題処理
      number_count = number_count +1;
      $('.number_now').text(number_count);
      $('.hint1').text(elementsData[0].hint1);
    }
    //現在のスコア取得
    scorePoint = $('.score').text();
  });

//元素クリック時処理
  $("[id^='no']").parent().on('click',function(){
    var element_name = $(this).text();

    if(element_name== elementsData[0].symbol){
      //背景色変更
      $(this).css('background-color','#a3d6cc');
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
    }else{
      //間違ったところをクリックすると-1pt.
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
