import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Scanner;

/**
 * ���� XY �ű�
 *
 * ����ʱ�䣺 2018.03.08
 * ����޸�ʱ�䣺
 *
 * @author Suvan
 */
public class GenerateXYScript {

    private volatile String startDay;

    /**
     * ������
     */
    public static void main(String [] args) throws IOException, ParseException {

        Scanner sc = new Scanner(System.in);
        System.out.print("������������ƥ�����ɵ��ļ�����me | sister����" );
        String fileName = sc.next();

        if (!"me".equals(fileName) && !"sister".equals(fileName)) {
            throw new RuntimeException("�����������������루'me' | 'sister'��!");
        }

        GenerateXYScript t = new GenerateXYScript();
        List<String> lines = Files.readAllLines(Paths.get(fileName + ".txt"), StandardCharsets.UTF_8);

        StringBuilder resultStr = new StringBuilder();
        String str;
        int day;
        String [] arr;
        String [] xyArr;
        for (int i = 0, len = lines.size(); i < len; i ++) {
            str = lines.get(i);

            arr = str.split("\\|");

            //not empty
            if (arr[1].charAt(2) == ' ' || arr[2].charAt(2) == ' ') {
                continue;
            }

            if (i == 0) {
                t.startDay = arr[1];
                day = 1;
            } else {
                day = t.getBetweenTwoDay(t.startDay, arr[1]) + 1;
            }

            resultStr.append(t.getXY(day, arr[2].split(" ")) + "\n");
        }

        System.out.println(resultStr.toString());
    }

    /**
     * ��ȡ����֮�����������
     *
     * @param date1 ��һ������
     * @param date2 �ڶ�������
     * @return int �������
     */
    public int getBetweenTwoDay(String date1, String date2) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd");
        int resultDay = 0;

        try {
            long a = sdf.parse(date1).getTime();
            long b = sdf.parse(date2).getTime();
            resultDay = (int)((b - a) / (1000 * 60 * 60 * 24));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return resultDay;
    }


    /**
     * ���ص�����ϵ� XY �ֶ�
     *
     * @param day ����
     * @param arr ʱ������
     * @return String XY�ֶλ���
     */
    private String getXY(int day, String[] arr) {
        StringBuilder resultStr = new StringBuilder();

        int i = 1;
        String min;
        String s;
        String ms;
        int countS;
        for (String time: arr) {
            if ("".equals(time) || time.length() == 0) {
                continue;
            }

            //{x: , y: }
            min = time.substring(0, time.indexOf(":"));
            s = time.substring(time.indexOf(":") + 1, time.lastIndexOf("."));
            ms = time.substring(time.lastIndexOf(".") + 1, time.length());

            countS = Integer.parseInt(min) * 60 + Integer.parseInt(s);

            resultStr.append("{x: " + day + "." + i + ", ");
            resultStr.append("y: " + countS + "." + ms + "}, ");

            countS = 0;
            i ++;
        }

        return resultStr.toString();
    }
}
