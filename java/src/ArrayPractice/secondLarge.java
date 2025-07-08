package ArrayPractice;

public class secondLarge {
    public static void main(String[] args) {
        int[] arr=new int[5];
        arr=new int[]{5,1,4,2,3,};
        int max=arr[0],a=4;
        while(a>0) {
            for (int i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                } else continue;
            } a--;
        }
        System.out.println(arr[arr.length-2]);
    }
}
