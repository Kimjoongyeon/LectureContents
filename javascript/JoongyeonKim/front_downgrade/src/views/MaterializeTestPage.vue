<template>
    <div class="app">
        <div class="teal lighten-1 center-align">
            이것이 Materialize 닷!
        </div>
        <div class="white-text purple darken-5">
            우왕 굳!
        </div><br>
        <!-- 반응형 사진 -->
        <div class="row">
            <img class="responsive-img" src="@/assets/img/nissan_maxima.png">
        </div>
        <!-- 아이콘 기능 -->
        <div class="row">
            <i class="material-icons medium teal-text">call</i>
            <i class="material-icons small teal-text">mail</i>
        </div>
        <!-- 비디오 플레이어 -->
        <div class="video-container">
            <iframe width="956" height="538" src="https://www.youtube.com/embed/3oV3KBdM5Fw" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        <!-- 화면 보여주기 옵션 -->
        <div class="row">
            <img class="circle responsive-img hide-on-small-only" src="@/assets/img/Spyder.jpg">
        </div>
         <!-- Grid(깔 맞추기) -->
         <div class="container">
             <div class="row">
                 <div class="col s1 blue">1</div>
                 <div class="col s1 red">2</div>
                 <div class="col s1 cyan">3</div>
                 <div class="col s1 black">4</div>
                 <div class="col s1 white">5</div>
                 <div class="col s1 green">6</div>
                 <div class="col s1 teal">7</div>
                 <div class="col s1 purple">8</div>
                 <div class="col s1 orange">9</div>
                 <div class="col s1 grey">10</div>
                  <div class="col s1 indigo">11</div>
             </div>
         </div>
         <!-- container를 사용할 경우 70%, row는 100% -->
         <div class="row">
             <div class="row">
                 <div class="col s1 blue">1</div>
                 <div class="col s1 red">2</div>
                 <div class="col s1 cyan">3</div>
                 <div class="col s1 black">4</div>
                 <div class="col s1 white">5</div>
                 <div class="col s1 green">6</div>
                 <div class="col s1 teal">7</div>
                 <div class="col s1 purple">8</div>
                 <div class="col s1 orange">9</div>
                 <div class="col s1 grey">10</div>
                  <div class="col s1 indigo">11</div>
             </div>
         </div>
         <div class="container">
             <div class="row">
                 <div class="col s12 blue">
                     <p>오졋다리!</p>
                 </div>
                 <div class="col s12 m4 12 x13 red">
                     <p>오졋다리</p>
                 </div>
                 <div class="col s12 m4 18 x16 cyan">
                      <p>오졋다리</p>
                 </div>
                 <div class="col s12 m4 12 x13 white">
                     <p>오졋다리</p>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
export default {
    name: 'MaterializeTestPage'
}
</script>