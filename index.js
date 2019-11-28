var date=[
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
    'hint1':'',
    'hint2':'',
    'hint3':''
  },
  {'id':6,'name':'炭素','symbol':'C','hint1':'','hint2':'','hint3':''},
  {'id':7,'name':'窒素','symbol':'N','hint1':'','hint2':'','hint3':''},
  {'id':8,'name':'酸素','symbol':'O','hint1':'','hint2':'','hint3':''},
  {'id':9,'name':'フッ素','symbol':'F','hint1':'','hint2':'','hint3':''},
  {'id':10,'name':'ネオン','symbol':'Ne','hint1':'','hint2':'','hint3':''},
  {'id':11,'name':'ナトリウム','symbol':'Na','hint1':'','hint2':'','hint3':''},
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


  //モーダル上のSTARTボタン押下
  $('.modal_close').click(function(){
    $('.modal').fadeOut();
    $('.overlay').fadeOut();
  });








  
});


$('.btn').click(function() {

  var random = Math.floor(Math.random() * 119);
  console.log(random)
});
