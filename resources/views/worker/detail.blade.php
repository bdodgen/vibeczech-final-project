@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Worker test</title>
@endsection

{{-- Content section --}}
@section('content')
<div class="worker-detail">

  <h1>worker detail content goes here</h1>

  <div class="graph-container"></div>
  
  <div class="exposure-record"></div>

</div>
@endsection

{{-- DoD: Page loads when URL(VibeCzech/worker) is entered.
Recommended HTML structure:
-Overall container
-Graph section
-Record detail section --}}