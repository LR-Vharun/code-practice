package may21;

public class CompareMethod {
	int compare(int Fno,int secno,int tno) {
		/*
		 * if (Fno>secno && tno<secno) { return Fno; } else if(secno>Fno && tno<secno) {
		 * return secno; } else return tno;
		 */
		int largest= Fno>secno? Fno>tno? Fno:tno :secno;
		return largest;
	}
	
	int Scompare(int Fno,int secno,int tno) {
		/*
		 * if (Fno<secno && tno>Fno) { return Fno; } else if(secno<Fno && tno>secno) {
		 * return secno; } else return tno;
		 */
		int smallest = Fno<secno? Fno<tno? Fno:tno :secno;
		return smallest;
	}
	
	

}
