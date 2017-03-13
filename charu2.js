/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Ctrl+R)；
 * 2. 查看 对返回值使用对象查看器 (Ctrl+I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Ctrl+L)
 */

var array = [5,6,7,2,3,4,89,45,21,47];

function charu(array) {
	for(let i = 1;i<array.length;i++){
		let key = array[i],left = 0,right = i - 1;
		while(left <= right){
			let middle = parseInt((left + right)/2);
			if (key < array[middle]) {
				right = middle -1;
			}else{
				left = middle + 1;
			}
		}
		for(let j = i - 1;j>=left;j--){
			array[j+1] = array[j];
		}
		array[left] = key;
	}
	return array;
}

function bianli(array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

bianli(charu(array));