var covid = 0
function hi (){
	var name = prompt("มีอาการ ไข้ รุ้สึกเมื่อยล้า ไอ้ ถ้าใช้ ตอบ 1 ถ้าไม่ใช้ ไม่ต้องพิม")
	var name2 = prompt("ไปสถานที่มีคนเยอะไหม  ถ้าใช้ตอบ1 ถ้าไม่ใช้ ไม่ต้องพิม")
     var name3 = prompt("อุณหภูมิเท่าไร")
	
	
	if (name == 1) {
      covid = covid + 1
	}
	else{
		//ไม่มี
	}
   
	if (name2 == 1) {
		covid = covid + 1
	  }
	  else{
		  //ไม่มี
	  }
	
	  if (name3 > 37)
	  {
		covid = covid + 1
	  }
	  else if (name3 < 37)
	  {
		//ไม่มี
	  }

	console.log(covid)

	if (covid == 3 ){
	   document.getElementById('c').innerHTML = "ความเสี่ยงสูงมาก!!"
	 }
	 else if (covid == 2 ){
	   document.getElementById('c').innerHTML = "ความเสี่ยงสูง"
	 }
	 else if (covid == 1 ){
	   document.getElementById('c').innerHTML = "ความเสี่ยงปกติ"
	 }
	 else {
		document.getElementById('c').innerHTML = "ความเสี่ยงน้อยมากก"
	 }
	
}
 