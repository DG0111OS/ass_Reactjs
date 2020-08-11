<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- plugins:css -->
        <link rel="stylesheet" href="{{asset('admin_/vendors/iconfonts/mdi/css/materialdesignicons.min.css')}}">
        <link rel="stylesheet" href="{{asset('admin_/vendors/css/vendor.bundle.base.css')}}">
        <link rel="stylesheet" href="{{asset('admin_/vendors/css/vendor.bundle.addons.css')}}">
        <!-- endinject -->
        <!-- plugin css for this page -->
        <link rel="stylesheet" href="{{asset('admin_/vendors/iconfonts/font-awesome/css/font-awesome.min.css')}}" />

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('admin_/css/style.css')}}">


{{--        home--}}

        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="{{asset('main_css/owl.carousel.min.css')}}">
        <link rel="stylesheet" href="{{asset('main_/css/styles.css')}}">



    </head>
    <body>
    <div id="appModule"></div>

    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
