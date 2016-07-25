<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {
	public function index()
	{
		$this->session->set_userdata('number', rand(1, 100));
		$this->load->view('index');
	}
	
}
