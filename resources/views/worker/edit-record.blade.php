

@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Edit Exposure Record</title>





  {{-- THE VITE MIGHT NEED TO BE CHANGED FOR THE CSS--}}




  @vite('resources/css/edit-record.scss')
@endsection

{{-- Content section --}}
@section('content')
{{-- COULD PROBABLY USE A BETTER CLASS NAME FOR THIS DIV --}}
<div class="worker_edit_record">

  <h1>Edit Record</h1>

  <div class="edit_records" id="edit_records"></div>
    @viteReactRefresh
    @vite('resources/js/EditExposureRecords.jsx')


  {{-- This is an attempt to pass a variable from laravel to react --}}
  <div id="record-id-var-for-react" name={{ $recordId }}></div>

</div>
@endsection
