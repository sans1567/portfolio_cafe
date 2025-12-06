$(function(){
    $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        return false;
      });

    $('.btn-trigger').on('click', function () {
        $('.open-nav').toggleClass('slide');
    });

    $('.main-visual').each( function () {
        var $slides = $(this).find('img'), //すべてのスライド
        slideCount = $slides.length, //スライドの点数
        currentIndex = 0; //現在のスライドのインデックス

        //1枚目の画像をフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        //7500msごとにshowNextSlide関数を実行
        setInterval(showNextSlide, 7500);

        //次のスライドを表示する関数
        function showNextSlide() {

            //次のスライドを表示する関数
            var nextIndex = (currentIndex + 1) % slideCount;

            //現在のスライドフェードアウト
            $slides.eq(currentIndex).fadeOut();

            //次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            //現在のインデックスを次のインデックスに更新
            currentIndex = nextIndex;
        }
    })
});