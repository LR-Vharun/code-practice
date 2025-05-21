package may21;

public class MainClass {
	public static void main(String args[]) {
		if(args.length !=3) {
			System.out.println("Enter the 3 initial numbers");
			return;
		}
		int x=Integer.parseInt(args[0]),
				y=Integer.parseInt(args[1]),z=Integer.parseInt(args[2]);
		CompareMethod co = new CompareMethod(); 		
		int temp=co.compare(x,y,z);
		System.out.println("The bigest number of the three numbers are : "+temp);
		
		System.out.println("The smallest number of the three numbers are : "+co.Scompare(x, y, z));
	}

}
