<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/x-icon" href="{{ asset('favicon.png') }}">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Rubik+Mono+One&family=Saira:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        
        <!-- Styles -->
        @vite('resources/css/universal-index.css')
        @vite('resources/css/tool-modal.scss')
        
        @yield('head')
    </head>


    <body>
      @include('layouts.header')
      @yield('content') 
          <div id="root-home" class="homepage">

    @viteReactRefresh    
    @vite("resources/js/homepage.jsx")
    <h1 id="slide-in" class="animation">
                VibeCzech
</h1>
    

</div>
      @include('layouts.footer')

    </body>
</html>

    

