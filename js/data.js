//name是院校名称，line是综合分数线.
var str2022 = '[{name:"同济大学1",line:"556.58"},{name:"同济大学2",line:"545.52"},'+
'{name:"上海交通大学",line:"547.2667"},{name:"华东师范大学",line:"531.2467"},'+
'{name:"华东理工大学",line:"502.1667"},{name:"上海大学",line:"499.5467"},'+
'{name:"上海师范大学",line:"488.3267"},{name:"上海理工大学",line:"480.8333"},'+
'{name:"上海海事大学",line:"477.1933"},{name:"上海工程技术大学1",line:"470.76"},{name:"上海工程技术大学2",line:"453.66"},'+
'{name:"上海应用技术大学",line:"464.78"},'+
'{name:"上海第二工业大学",line:"459.4533"},{name:"上海商学院",line:"455.7733"},'+
'{name:"上海电机学院",line:"452.4667"},{name:"上海视觉艺术学院",line:"446.7067"},'+
'{name:"上师天华学院1",line:"446.1267"},{name:"上师天华学院2",line:"420.2933"},'+
'{name:"上海杉达学院",line:"438"},{name:"上海建桥学院1",line:"425.1267"},{name:"上海建桥学院2",line:"418.5267"},'+
'{name:"上外贤达学院",line:"420.3267"},'+
'{name:"上海立达学院",line:"410.2333"},{name:"上海中侨职业技术大学",line:"407.84"},'+
'{name:"南京师范大学",line:"499.6733"},{name:"山东大学",line:"499.1467"},{name:"苏州大学",line:"497.9333"},'+
'{name:"中国地质大学武汉",line:"494.4"},{name:"江南大学",line:"492.36"},'+
'{name:"武汉理工大学",line:"492.2333"},{name:"中国地质大学北京",line:"488.1467"},'+
'{name:"西南交通大学",line:"487.96"},{name:"北京林业大学",line:"487.78"},'+
'{name:"宁波大学",line:"485.2067"},'+
'{name:"浙江传媒学院1",line:"480.0733"},{name:"浙江传媒学院2",line:"466.8933"},'+
'{name:"厦门大学",line:"478.3933"},{name:"湖南师范大学",line:"477.3733"},'+
'{name:"南京信息工程大学1",line:"476.8"},{name:"南京信息工程大学2",line:"476.6533"},{name:"苏州科技大学",line:"472.3733"},'+
'{name:"山东师范大学",line:"471.9933"},{name:"南通大学",line:"469.1667"},{name:"四川师范大学",line:"469.16"},'+
'{name:"江西科技师范大学",line:"465.8"},{name:"湖北大学",line:"464.6067"},{name:"安徽师范大学",line:"463.06"},'+
'{name:"湘潭大学",line:"456.44"},{name:"湖北工业大学",line:"456.08"},'+
'{name:"江西财经大学",line:"455.4133"},{name:"陕西科技大学",line:"453.0733"},'+
'{name:"武汉纺织大学",line:"452.7533"},{name:"天津科技大学",line:"452.3333"},{name:"成都大学",line:"452.1867"},'+
'{name:"南昌师范学院",line:"451.8933"},{name:"江西理工大学",line:"451.8467"},{name:"淮北师范大学",line:"451.84"},{name:"曲阜师范大学",line:"451.5867"},'+
'{name:"赣南师范大学",line:"450.8067"},{name:"成都信息工程大学",line:"450.7667"},{name:"湖南工业大学",line:"449.5133"},'+
'{name:"江汉大学1",line:"449.4533"},{name:"江汉大学2",line:"445.3533"},'+
'{name:"大连工业大学",line:"449.0667"},{name:"无锡学院1",line:"448.6867"},{name:"无锡学院2",line:"441.2067"},'+
'{name:"南昌航空大学",line:"448.5733"},{name:"大连民族大学",line:"448.3933"},'+
'{name:"景德镇学院",line:"447.3533"},{name:"新余学院",line:"446.7067"},{name:"兰州交通大学",line:"445.9333"},'+
'{name:"江西农业大学",line:"445.8667"},{name:"井冈山大学",line:"445.6867"},{name:"厦门大学嘉庚学院",line:"444.1933"},'+
'{name:"桂林电子科技大学",line:"444.16"},{name:"西南林业大学",line:"443.2267"},'+
'{name:"桂林理工大学",line:"443.2133"},{name:"辽宁工程技术大学",line:"443.1533"},'+
'{name:"平顶山学院",line:"440.76"},{name:"四川传媒学院",line:"439.2933"},{name:"南京师范大学泰州学院",line:"438.3267"},'+
'{name:"黄淮学院",line:"437.16"},{name:"无锡太湖学院",line:"431.6867"},'+
'{name:"重庆外语外事学院",line:"431.2667"},{name:"南昌理工学院",line:"428.9733"},{name:"武汉城市学院",line:"426.0133"},'+
'{name:"北京城市学院",line:"422.8067"},{name:"武昌首义学院",line:"422.4867"},{name:"成都东软学院",line:"421.54"},'+
'{name:"湖南工业科技学院1",line:"415.56"},{name:"湖南工业科技学院2",line:"405.4133"},'+
'{name:"文华学院",line:"415"},{name:"武汉华夏理工学院",line:"414.0667"},'+
'{name:"大连艺术学院",line:"411.6867"},{name:"青岛电影学院",line:"410.1733"},'+
'{name:"天津商业宝德学院",line:"408.9133"},{name:"大连理工城市学院",line:"408.88"},'+
'{name:"福州外语外贸学院1",line:"407.0667"},{name:"福州外语外贸学院2",line:"396.0333"},'+
'{name:"四川工商学院",line:"406.6"},{name:"北京工业大学耿丹学院",line:"405.5333"},'+
'{name:"武汉晴川学院",line:"403.72"},'+
'{name:"江西科技学院",line:"401.5467"},{name:"云南大学滇池学院",line:"401.48"},'+
'{name:"四川文化艺术学院",line:"401.2333"},{name:"景德镇艺术职业大学",line:"399.1267"},'+
'{name:"保定理工学院",line:"399"},'+
'{name:"吉林动画学院1",line:"394.9533"},{name:"吉林动画学院2",line:"392.9133"},'+
'{name:"北海艺术设计学院",line:"387.2733"},{name:"丽江文化旅游学院",line:"381.7733"},'+
'{name:"海口经济学院",line:"372.7933"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"}]';
<!-- 表格溢出界面，避免信息展示不全解决方案是多渲染几行，直到空行刚好填满一面。 -->

var str2021 = '[{name:"同济大学",line:"535.2133"},'+
'{name:"上海交通大学",line:"533.3067"},{name:"华东师范大学",line:"523.5133"},'+
'{name:"华东理工大学",line:"497.8467"},{name:"上海大学",line:"495.2667"},'+
'{name:"上海师范大学",line:"484.1867"},{name:"上海理工大学",line:"474.8733"},'+
'{name:"上海海事大学",line:"472.0733"},{name:"上海工程技术大学1",line:"464.4533"},{name:"上海工程技术大学2",line:"448.8067"},'+
'{name:"上海应用技术大学",line:"459.3933"},'+
'{name:"上海第二工业大学",line:"455.5533"},{name:"上海商学院",line:"452.4933"},'+
'{name:"上海电机学院",line:"447.5267"},{name:"上海视觉艺术学院",line:"446.34"},'+
'{name:"上师天华学院1",line:"440.4933"},{name:"上师天华学院2",line:"415.9067"},'+
'{name:"上海杉达学院",line:"431.9667"},{name:"上海建桥学院1",line:"421.6133"},{name:"上海建桥学院2",line:"411.2867"},'+
'{name:"上外贤达学院",line:"417.6733"},'+
'{name:"上海立达学院",line:"410.12"},{name:"上海中侨职业技术大学",line:"407.1133"},'+
'{name:"苏州大学",line:"494.0733"},{name:"南京师范大学",line:"492.66"},'+
'{name:"中国地质大学武汉",line:"487.46"},{name:"厦门大学",line:"486.8867"},{name:"江南大学",line:"485.72"},'+
'{name:"武汉理工大学",line:"483.0067"},{name:"西南交通大学",line:"480.36"},'+
'{name:"湖南师范大学1",line:"471.0933"},{name:"湖南师范大学2",line:"480.1067"},{name:"湖南师范大学3",line:"476.86"},'+
'{name:"中国地质大学北京",line:"479.7867"},{name:"北京林业大学",line:"479.24"},'+
'{name:"浙江传媒学院1",line:"476.8533"},{name:"浙江传媒学院2",line:"460.4267"},{name:"宁波大学",line:"474.1867"},'+
'{name:"南京信息工程大学1",line:"471.9867"},{name:"南京信息工程大学2",line:"462.7067"},{name:"苏州科技大学",line:"463.9333"},'+
'{name:"四川师范大学",line:"462.9667"},{name:"南通大学",line:"462.2533"},{name:"山东师范大学",line:"460.6867"},'+
'{name:"湖北大学",line:"456.76"},{name:"安徽师范大学",line:"454.6867"},{name:"湖北工业大学",line:"449.7267"},'+
'{name:"江西财经大学",line:"449.3267"},{name:"湘潭大学",line:"447.3733"},{name:"南京传媒学院",line:"447.2067"},'+
'{name:"安徽农业大学",line:"446.9867"},{name:"武汉纺织大学",line:"446.3867"},'+
'{name:"成都大学",line:"446.3267"},{name:"淮北师范大学",line:"446.0933"},{name:"天津科技大学",line:"445.56"},'+
'{name:"江西理工大学",line:"445.3667"},{name:"江西科技师范大学",line:"445.1867"},{name:"曲阜师范大学",line:"444.9667"},'+
'{name:"赣南师范大学",line:"444.0867"},{name:"成都信息工程大学",line:"443.82"},{name:"大连工业大学",line:"443.5467"},'+
'{name:"湖南工业大学",line:"443.5133"},{name:"陕西科技大学",line:"442.9933"},{name:"江西工程学院",line:"422.96"},'+
'{name:"江汉大学1",line:"442.76"},{name:"江汉大学2",line:"440.3867"},'+
'{name:"井冈山大学",line:"442.4267"},{name:"泉州师范学院",line:"442.3267"},'+
'{name:"景德镇学院",line:"441.46"},{name:"大连民族大学",line:"440.74"},{name:"新余学院",line:"440.5"},'+
'{name:"兰州交通大学",line:"439.8667"},{name:"桂林理工大学",line:"439.2533"},{name:"南昌航空大学",line:"439.1667"},'+
'{name:"南昌师范学院",line:"438.8733"},{name:"厦门大学嘉庚学院",line:"438.8333"},'+
'{name:"西南林业大学",line:"437.9467"},{name:"辽宁工程技术大学",line:"436.4933"},{name:"江西农业大学",line:"435.96"},'+
'{name:"桂林电子科技大学",line:"431.7333"},{name:"南京师范大学泰州学院",line:"431.5467"},'+
'{name:"黄淮学院",line:"431.36"},'+
'{name:"平顶山学院",line:"429.98"},{name:"四川传媒学院",line:"427.06"},'+
'{name:"无锡太湖学院",line:"425.96"},{name:"重庆外语外事学院",line:"423.0333"},'+
'{name:"北京城市学院",line:"421.3467"},{name:"南昌理工学院",line:"420.7"},{name:"武汉城市学院",line:"415.68"},'+
'{name:"大连艺术学院",line:"412.6733"},{name:"湖南工业科技学院1",line:"407.3133"},{name:"湖南工业科技学院2",line:"399.3"},{name:"武昌首义学院",line:"406.04"},'+
'{name:"青岛电影学院",line:"405.9467"},{name:"大连理工城市学院",line:"405.6533"},{name:"武汉华夏理工学院",line:"405.62"},'+
'{name:"成都东软学院",line:"405.2267"},{name:"天津商业宝德学院",line:"405.1333"},{name:"福州外语外贸学院",line:"403.3267"},'+
'{name:"保定理工学院",line:"400.8667"},{name:"云南大学滇池学院",line:"399.9267"},{name:"文华学院",line:"399.3867"},'+
'{name:"北京工业大学耿丹学院",line:"398.8067"},'+
'{name:"江西科技学院",line:"396.88"},{name:"景德镇艺术职业大学",line:"395.6533"},'+
'{name:"四川文化艺术学院",line:"393.7067"},'+
'{name:"吉林动画学院1",line:"393"},{name:"吉林动画学院2",line:"388.2467"},'+
'{name:"北海艺术设计学院",line:"386.2867"},{name:"丽江文化旅游学院",line:"384.4933"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"}]';

var str2020 = '[{name:"同济大学",line:"541.3467"},'+
'{name:"上海交通大学",line:"537.1067"},{name:"华东师范大学",line:"525.04"},'+
'{name:"华东理工大学",line:"501.5667"},{name:"上海大学",line:"494.9467"},'+
'{name:"上海师范大学",line:"483.0133"},{name:"上海理工大学",line:"477.3533"},{name:"上海海事大学",line:"474.54"},'+
'{name:"上海工程技术大学1",line:"468.4067"},{name:"上海工程技术大学2",line:"450.3533"},{name:"上海工程技术大学3",line:"446.36"},'+
'{name:"上海应用技术大学",line:"459.28"},'+
'{name:"上海第二工业大学",line:"456.4133"},{name:"上海商学院",line:"453.4133"},'+
'{name:"上海视觉艺术学院",line:"452.1733"},{name:"上海电机学院",line:"450.8933"},'+
'{name:"上师天华学院1",line:"433.0867"},{name:"上师天华学院2",line:"412.2867"},'+
'{name:"上海杉达学院",line:"429.64"},{name:"上海建桥学院1",line:"424.4733"},{name:"上海建桥学院2",line:"408.6067"},'+
'{name:"上外贤达学院",line:"418.92"},{name:"上海立达学院",line:"409.2467"},'+
'{name:"浙江大学",line:"547.3533"},{name:"苏州大学",line:"493.4067"},{name:"中国地质大学武汉",line:"490.5067"},'+
'{name:"南京师范大学",line:"486.6267"},{name:"厦门大学",line:"485.8133"},{name:"江南大学",line:"484.5"},'+
'{name:"陕西师范大学",line:"484.2267"},{name:"武汉理工大学",line:"483.4533"},{name:"湖南师范大学1",line:"482.86"},{name:"湖南师范大学2",line:"468.28"},{name:"湖南师范大学3",line:"470.8267"},'+
'{name:"西南交通大学",line:"482.72"},{name:"中国地质大学北京",line:"482.5933"},'+
'{name:"浙江传媒学院1",line:"475.86"},{name:"浙江传媒学院2",line:"453.2467"},'+
'{name:"南京信息工程大学",line:"470.7667"},{name:"苏州科技大学",line:"461.8667"},'+
'{name:"四川师范大学",line:"459.2267"},{name:"安徽师范大学",line:"453.9867"},'+
'{name:"湖北大学",line:"451.7667"},{name:"湖北工业大学",line:"450.0667"},'+
'{name:"江西财经大学",line:"449.9533"},{name:"安徽农业大学",line:"449.8867"},{name:"曲阜师范大学",line:"449.88"},{name:"成都信息工程大学",line:"448.3267"},'+
'{name:"武汉纺织大学",line:"447.7133"},{name:"湘潭大学",line:"447.0067"},{name:"淮北师范大学",line:"446.7867"},'+
'{name:"江西理工大学",line:"446.4733"},{name:"南京传媒学院",line:"446.34"},{name:"赣南师范大学",line:"446.2667"},'+
'{name:"成都大学",line:"445.8533"},{name:"陕西科技大学",line:"444.58"},{name:"湖南工业大学",line:"444.48"},'+
'{name:"天津科技大学",line:"443.0733"},{name:"哈尔滨理工大学",line:"441.0867"},{name:"井冈山大学",line:"440.5333"},{name:"江汉大学1",line:"440.4667"},{name:"江汉大学2",line:"429.2867"},'+
'{name:"泉州师范学院",line:"440.4533"},{name:"大连工业大学",line:"440.3667"},{name:"桂林理工大学",line:"439.7867"},'+
'{name:"景德镇学院",line:"438.4533"},{name:"兰州交通大学",line:"437.88"},{name:"新余学院",line:"437.68"},'+
'{name:"辽宁工程技术大学",line:"436.5467"},{name:"西南林业大学",line:"436.26"},'+
'{name:"南京师范大学泰州学院",line:"434.7867"},{name:"大连民族大学",line:"432.68"},'+
'{name:"厦门大学嘉庚学院",line:"431.6133"},{name:"黄淮学院",line:"426.7067"},{name:"同济大学浙江学院",line:"426.5267"},{name:"无锡太湖学院",line:"424.24"},{name:"江西工程学院",line:"423.56"},'+
'{name:"四川传媒学院",line:"422.5533"},{name:"北京城市学院",line:"421.7733"},{name:"南昌理工学院",line:"420.0333"},{name:"重庆外语外事学院",line:"417.14"},'+
'{name:"景陶大科技艺术学院",line:"413.3533"},{name:"湖南工业科技学院",line:"411.8333"},{name:"武汉城市学院",line:"410.8"},{name:"保定理工学院",line:"408.62"},'+
'{name:"大连艺术学院",line:"407.9933"},{name:"青岛电影学院",line:"407.9733"},{name:"大连理工城市学院",line:"407.9667"},{name:"青岛恒星科技学院",line:"407.4333"},'+
'{name:"吉林动画学院1",line:"406.12"},{name:"吉林动画学院2",line:"390.9267"},{name:"武汉华夏理工学院",line:"405.7067"},{name:"武昌首义学院",line:"404.28"},'+
'{name:"云南大学滇池学院",line:"405.3933"},{name:"天津商业宝德学院",line:"403.4267"},'+
'{name:"北京工业大学耿丹学院",line:"400.1"},{name:"丽江文化旅游学院",line:"399.92"},{name:"北海艺术设计学院",line:"399.0867"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"}]';


/*
var str2020 = '[{name:"同济大学1",line:""},{name:"同济大学2",line:""},'+
'{name:"上海交通大学",line:""},{name:"华东师范大学",line:""},'+
'{name:"华东理工大学",line:""},{name:"上海大学",line:""},'+
'{name:"上海师范大学",line:""},{name:"上海理工大学",line:""},'+
'{name:"上海海事大学",line:""},{name:"上海工程技术大学1",line:""},{name:"上海工程技术大学2",line:""},'+
'{name:"上海应用技术大学",line:""},'+
'{name:"上海第二工业大学",line:""},{name:"上海商学院",line:""},'+
'{name:"上海电机学院",line:""},{name:"上海视觉艺术学院",line:""},'+
'{name:"上师天华学院1",line:""},{name:"上师天华学院2",line:""},'+
'{name:"上海杉达学院",line:""},{name:"上海建桥学院1",line:""},{name:"上海建桥学院2",line:""},'+
'{name:"上外贤达学院",line:""},'+
'{name:"上海立达学院",line:""},{name:"上海中侨职业技术大学",line:""},'+
'{name:"南京师范大学",line:""},{name:"山东大学",line:""},{name:"苏州大学",line:""},'+
'{name:"中国地质大学武汉",line:""},{name:"江南大学",line:""},'+
'{name:"武汉理工大学",line:""},{name:"中国地质大学北京",line:""},'+
'{name:"西南交通大学",line:""},{name:"北京林业大学",line:""},'+
'{name:"宁波大学",line:""},'+
'{name:"浙江传媒学院1",line:""},{name:"浙江传媒学院2",line:""},'+
'{name:"厦门大学",line:""},{name:"湖南师范大学",line:""},'+
'{name:"南京信息工程大学1",line:""},{name:"南京信息工程大学2",line:""},{name:"苏州科技大学",line:""},'+
'{name:"山东师范大学",line:""},{name:"南通大学",line:""},{name:"四川师范大学",line:""},'+
'{name:"江西科技师范大学",line:""},{name:"湖北大学",line:""},{name:"安徽师范大学",line:""},'+
'{name:"湘潭大学",line:""},{name:"湖北工业大学",line:""},'+
'{name:"江西财经大学",line:""},{name:"陕西科技大学",line:""},'+
'{name:"武汉纺织大学",line:""},{name:"天津科技大学",line:""},{name:"成都大学",line:""},'+
'{name:"南昌师范学院",line:""},{name:"江西理工大学",line:""},{name:"淮北师范大学",line:""},{name:"曲阜师范大学",line:""},'+
'{name:"赣南师范大学",line:""},{name:"成都信息工程大学",line:""},{name:"湖南工业大学",line:""},'+
'{name:"江汉大学1",line:""},{name:"江汉大学2",line:""},'+
'{name:"大连工业大学",line:""},{name:"无锡学院1",line:""},{name:"无锡学院2",line:""},'+
'{name:"南昌航空大学",line:""},{name:"大连民族大学",line:""},'+
'{name:"景德镇学院",line:""},{name:"新余学院",line:""},{name:"兰州交通大学",line:""},'+
'{name:"江西农业大学",line:""},{name:"井冈山大学",line:""},{name:"厦门大学嘉庚学院",line:""},'+
'{name:"桂林电子科技大学",line"},{name:"西南林业大学",line:""},'+
'{name:"桂林理工大学",line:""},{name:"辽宁工程技术大学",line:""},'+
'{name:"平顶山学院",line"},{name:"四川传媒学院",line:""},{name:"南京师范大学泰州学院",line:""},'+
'{name:"黄淮学院",line"},{name:"无锡太湖学院",line:""},'+
'{name:"重庆外语外事学院",line:""},{name:"南昌理工学院",line:""},{name:"武汉城市学院",line:""},'+
'{name:"北京城市学院",line:""},{name:"武昌首义学院",line:""},{name:"成都东软学院",line"},'+
'{name:"湘工科技1",line"},{name:"湘工科技2",line:""},'+
'{name:"文华学院",l"},{name:"武汉华夏理工学院",line:""},'+
'{name:"大连艺术学院",line:""},{name:"青岛电影学院",line:""},'+
'{name:"天津商业宝德学院",line:""},{name:"大连理工城市学院",line"},'+
'{name:"福州外语外贸学院1",line:""},{name:"福州外语外贸学院2",line:""},'+
'{name:"四川工商学院",line:""},{name:"北京工业大学耿丹学院",line:""},'+
'{name:"武汉晴川学院",line:""},'+
'{name:"江西科技学院",line:""},{name:"云南大学滇池学院",line:""},'+
'{name:"四川文化艺术学院",line:""},{name:"景德镇艺术职业大学",line:""},'+
'{name:"保定理工学院",line:""},'+
'{name:"吉林动画学院1",line:""},{name:"吉林动画学院2",line:""},'+
'{name:"北海艺术设计学院",line:""},{name:"丽江文化旅游学院",line:""},'+
'{name:"海口经济学院",line:""},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"},'+
'{name:"",line:"9999"},{name:"",line:"9999"}]';
*/


var str = str2022;