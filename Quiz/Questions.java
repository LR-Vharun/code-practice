package Quiz;
import java.util.*;

public class Questions{
	int points=0;
	String Answer;
	String temp;
	Scanner in = new Scanner(System.in);
	lifeline lf = new lifeline();
	int lfcount=2;
	
	public Boolean Q1() {
		
		System.out.println("1. What is the largest living tree in the world known as?\n Answers\n 1)The General Sherman Tree \t 2)Ashoka tree \n 3)Arya tree \t 4)Banana");
		System.out.println("Enter 123 for 50-50 lifeline, No of 50-50 chances left = "+lfcount);
		Answer=in.nextLine();
		if(Answer.equals("123")&& lfcount!=0)
		{
			lf.lf1();
			temp=in.nextLine();	
			lfcount-=1;
			
		}
		lfcount=lfcount;
		
		if(Answer.equals("1")|| temp.equals("1")) {
			
			return true;
		}
		else return false;
	}
	public Boolean q2() {
		System.out.println("2. About what fraction of a human tooth is visible?\n Answers\n 1)Third \t 2)Two-Third\n 3)One-third \t 4)One");
		System.out.println("Enter 123 for 50-50 lifeline, No of 50-50 chances left = "+lfcount);
		Answer=in.nextLine();
		if(Answer.equals("123")&& lfcount!=0)
		{
			lf.lf2();
			temp=in.nextLine();
			lfcount-=1;
		}
		lfcount=lfcount;
		if(Answer.equals("3")||temp.equalsIgnoreCase("3")) {

			return true;
		}
		else return false;
	}
	public Boolean q3() {
		System.out.println("3.Where playing cards was invented?\n Answers\n 1)Europe \t 2)Asia\n 3)Africa \t 4)America");
		System.out.println("Enter 123 for 50-50 lifeline, No of 50-50 chances left = "+lfcount);
		Answer=in.nextLine();
		if(lfcount==0)
			{
			System.out.println("No more chances left");
			temp=in.nextLine();			}

		else {
			
		if(Answer.equals("123")&& lfcount!=0)
		{
			lf.lf3();
			temp=in.nextLine();	
			lfcount-=1;
		}
		lfcount=lfcount;
		}
		if(Answer.equalsIgnoreCase("2")||temp.equalsIgnoreCase("2")) {
			return true;
		}
		else return false;
	
	}
 
 }

 