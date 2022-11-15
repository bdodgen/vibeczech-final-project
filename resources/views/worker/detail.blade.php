@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Worker</title>
  @vite('resources/css/worker-detail.scss')
@endsection

{{-- Content section --}}
@section('content')
<div class="worker-detail">

  <h1>worker detail content goes here</h1>

  <div class="graph-container"><p>placeholder gc</p></div>
  
  <div class="exposure-record"><p>placeholder er</p></div>

</div>
@endsection

{{-- DoD: Page loads when URL(VibeCzech/worker) is entered.
Recommended HTML structure:
-Overall container
-Graph section
-Record detail section --}}