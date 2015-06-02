<?php
/* TODO:
	1. Connect to a db to get a list of what this user's menu should include
	2. ???
	3. profit	
	
	Basically, this file is a work in progress, not done yet.
*/
$flyoutBundle = <<< EOT
	<div id='flyout'>
	
		<div id='toggleButton'>
			<span class='fa fa-bars'></span>
		</div>
		
		<div class='mainMenu'>
			<div class='hasChild' data-item-number="1"><a href="#1">Parent with children<span class="fa fa-angle-right"></span></a></div>	
			<div class='hasChild' data-item-number="2"><a href="#2">Block of text<span class="fa fa-angle-right"></span></a></div>
			<div class='hasChild' data-item-number="3"><a href="#3">Form<span class="fa fa-angle-right"></span></a></div>
			<div class='noChild' data-item-number="4"><a href="#4">No Children</a></div>
		</div>
		
		<div class="subMenu subMenu1">
			<div><a href="#1">subItem One Level Two</a></div>
			<div><a href="#1">subItem Two Level Two</a></div>
			<div><a href="#1">subItem Three Level Two</a></div>
			<div><a href="#1">subItem Four Level Two</a></div>
			<div><a href="#1">subItem Five Level Two</a></div>
		</div>
		
		<div class="subMenu subMenu2">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin leo purus, sit amet interdum nibh lobortis vel. Donec non ultricies risus. Donec scelerisque eros ac felis dictum, malesuada laoreet magna dapibus. Nam velit augue, pharetra a dignissim id, iaculis eget lacus. Vivamus ac sem lobortis, euismod diam sed, cursus lectus. Nullam turpis lorem, malesuada eleifend mauris vel, sagittis feugiat diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nisl diam, sodales vitae posuere quis, interdum convallis purus. Duis tempus efficitur tortor, ut congue tellus viverra sodales. Quisque eros purus, ultrices vel purus id, maximus vulputate mauris. Aliquam luctus sapien eget elit sagittis luctus vitae a ipsum. Pellentesque ullamcorper urna vel purus hendrerit, id vehicula magna accumsan.</p>
		</div>
		
		<div class="subMenu subMenu3">
			<form>
				First name:<br>
				<input type="text" name="firstname">
				<br>
				Last name:<br>
				<input type="text" name="lastname">
			</form>
		</div>
		
	</div>
EOT;
	
	
header("Content-Type: application/json;charset=utf-8");
print json_encode($flyoutBundle);