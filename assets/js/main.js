var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

//đóng mở mobile menu
mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = "46px";
  }
};

//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function () {
    header.style.height = "46px";
    // console.log(this);
  };
}
