package Quiz;
import java.util.Scanner;
public class QuizzGame extends Questions{
	

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int points=0;

		System.out.println("Enter you name");
		String userName=in.next();

		Questions q = new Questions();
		if(q.Q1().equals(true)) {
			System.out.println("Correct answer");
			points+=100;
			}
		else {
			System.out.println("Wrong Answer");
		}
		points=points;
		
		if(q.q2().equals(true)){
			System.out.println("Correct answer");
			points+=100;
		}
		else {
			System.out.println("Wrong Answer");
		}
		points=points;


		if(q.q3().equals(true)) {
			System.out.println("Correct answer");
			points+=100;
		}
		else {
			System.out.println("Wrong Answer");
		}

		
		System.out.println(userName+" Earn total Rs"+points);
		
		




	}

	}
	


