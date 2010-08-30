run lambda { |env| 
	[200, 
	{'Content-Type' => 'text/html; charset=UTF-8'}, 
	::File::open((env['REQUEST_URI'].include?('timer.js') ? 'timer.js' : 'test.html'))] 
}
