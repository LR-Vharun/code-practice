package ArrayPractice;

public class reversed {
    public static void main(String[] args) {
        int arr[] = {2,3,4,5,6 };
        for(int ele=0;ele<arr.length/2;ele++){
            int temp=arr[ele];
            arr[ele]=arr[arr.length-1-ele];
            arr[arr.length-1-ele]=temp;
        }
        for(int a:arr){
        System.out.print(a);}

    }
}
