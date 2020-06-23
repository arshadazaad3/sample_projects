import java.lang.reflect.Array;
import java.util.Arrays;

public class bubbleSort {
    public static void main(String[] args) {
//        int[] vh = {10, 21, 3, 5, 1};
//        bubbleSort(vh);
        quickSort();

    }

    public static void bubbleSort(int[] userArray) {
        int[] arr = userArray;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                int a = arr[j];
                int b = arr[j + 1];
                if (a > b) {
                    swap(arr, j, j + 1);
                }
            }
        }

        System.out.println(Arrays.toString(arr));

    }

    public static void swap(int[] userArray, int a, int b) {
        int temp = userArray[a];
        userArray[a] = userArray[b];
        userArray[b] = temp;

    }

    public static void quickSort(){}

}

