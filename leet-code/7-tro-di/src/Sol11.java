public class Sol11 {
    public static void main(String[] args){
        int[] case1 = new int[] { 1, 1 };
        System.out.println(maxArea(case1));
        System.out.println("\n");
        int[] case2 = new int[] {1,8,6,2,5,4,8,3,7};
        System.out.println(maxArea(case2));
    }

    public static int maxArea(int[] height) {
        int i = 0, j = height.length - 1, max = 0;
        while (i < j) {
            int area = Math.min(height[i], height[j]) * (j - i);
            max = Math.max(max, area);

            if (height[i] < height[j]) {
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
