function a() {
    console.log('最終スタック')
}
function b() {
    a();
}
function c() {
    b();
}
c();
