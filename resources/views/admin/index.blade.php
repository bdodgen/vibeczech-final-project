@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Admin</title>
  @vite('resources/css/admin.scss')
  @vite('resources/css/modal.css')
  @vite('resources/css/tool-modal.scss')
  @vite('resources/css/work-party-modal.scss')
@endsection


{{-- Content section --}}
@section('content')
<div class='admin_index'>
  
  <div id='root'>
    @viteReactRefresh
    @vite('resources/js/Admin.jsx')
  </div>

  <div id='add_tool_modal' >
    @viteReactRefresh
    @vite('resources/js/add-tool-modal.jsx')    
  </div>
  
  <div class='work_parties_container'>
    <div id='work_party_modal' >
      @viteReactRefresh
      @vite('resources/js/work-party-modal.jsx')    
    </div>
    
    <div id='current_workteams'>
      @viteReactRefresh
      @vite('resources/js/currentWorkTeams.jsx')
    </div>
  </div>

  <div class="exposure-calculator">
    <div id='exposure_calculator'>
    @viteReactRefresh
    @vite('resources/js/exposure-calculator.jsx')
    </div>
  </div>

  <div class="worker_dropdown_container">
    <div id='worker_dropdown'>
    @viteReactRefresh
    @vite('resources/js/workerDropdown.jsx')
    </div>
  </div>

</div>

@endsection
