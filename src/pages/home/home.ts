import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('pageTop') pageTop: Content;
  img_bg: string = "../assets/imgs/bg-color.png";
  feedback: Array<{id: number, avatar: string, name: string, club: string, content: string }> = [
    {id: 0 , avatar: "../assets/imgs/user1.jpg", name: "TRỊNH ĐÌNH QUANG", club: "FC Bgate", content: "    Trước kia tôi thực sự khổ sở với việc bắt đối đá bóng trên các group facebook vì có quá nhiều thông tin trôi đi nhanh. Ứng dụng Bóng đá 360 đã giúp tôi rất nhiều bắt đối rất nhanh chóng và dễ dàng"},
    {id: 1 , avatar: "../assets/imgs/user2.jpg",  name: "TRẦN ĐÌNH TRỌNG", club: "FC Bgate", content: "    Việc tổ chức giải đấu đá bóng phủi luôn tốn rất nhiều công sức và thủ tục. Với ứng dụng Bóng đá 360, tôi có thể quản lí giải đấu 1 cách rất nhanh và chuyên nghiệp"},
    {id: 2 , avatar: "../assets/imgs/user3.jpg",  name: "NGUYỄN VĂN LONG", club: "FC Bgate", content: "    Tôi thực sự rất thích thú với những bức ảnh mà tôi có thể tạo ra thông qua ứng dụng. Chúng rất thú vị và khiến tôi cảm thấy rất hứng thú"}
  ];

  features: Array<{id: number, name: string, icon: string}> = [
    {id: 0, name: "Đặt sân, bắt đối", icon: "landing-football"},
    {id: 1, name: "Đăng bài tìm đối", icon: "landing-constract"},
    {id: 2, name: "Chức năng 360", icon: "landing-newspaper"},
    {id: 3, name: "Tổ chức giải đấu", icon: "landing-trophy"},
  ]

  constructor(public navCtrl: NavController) {

  }

  scroll(){
    
    this.pageTop.scrollToTop(1500).then(()=>{
      document.getElementById('button-scroll').style.display = "none";
    })
    
  }

  onScroll(){
    document.getElementById('button-scroll').style.display = "block";
  }

  scrollTo(item: any){
    // this.pageTop.scrollTo(100, 200, 3000);
    
    let element1 = document.getElementById('feature1');
    let element2 = document.getElementById('feature2');
    let element3 = document.getElementById('feature3');
    if(element1 && element2 && element3){
      if(item.id == 0){
        this.pageTop.scrollTo(0,element1.offsetTop - 100 ,500);
      }
      if(item.id == 1){
        this.pageTop.scrollTo(0,element2.offsetTop ,500);
      }
      if(item.id == 2){
        this.pageTop.scrollTo(0,element3.offsetTop - 100 ,500);
      }
    }
  }

  goToStore(){
    window.open("https://play.google.com/store/apps/details?id=com.appinasia.bongda69", "_self")
  }
}