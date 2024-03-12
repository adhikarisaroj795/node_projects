using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace proj
{
    public partial class MainFrm : MetroFramework.Forms.MetroForm
    {
        public int loggedIn { get; set; }
        public int UserID { get; set; }
        public MainFrm()
        {
            InitializeComponent();
            loggedIn = 0;
        }


        private void MainFrm_Load(object sender, EventArgs e)
        {

        }

        private void MainFrm_Activated(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'dataSet11.AttendanceRecordsTBL' table. You can move, or remove it, as needed.
            this.attendanceRecordsTBLTableAdapter.Fill(this.dataSet11.AttendanceRecordsTBL);

            if (loggedIn==0)
            {
                //open login form
                LoginFrm newLogin = new LoginFrm();
                newLogin.ShowDialog();

                if (newLogin.loginFlag == false)
                {
                    Close();
                }
                else
                {
                    UserID = newLogin.UserID;
                    statelblUser.Text = UserID.ToString();
                    loggedIn = 1;

                    // TODO: This line of code loads data into the 'dataSet1.ClassesTBL' table. You can move, or remove it, as needed.
                    this.classesTBLTableAdapter.Fill(this.dataSet1.ClassesTBL);
                    classesTBLBindingSource.Filter = "UserID = " + UserID.ToString();
                }
            }
           
        }

        private void metroButton1_Click(object sender, EventArgs e)
        {
            //save
            DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter ada = new DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter();
            foreach (DataGridViewRow row in dataGridView1.Rows)
            {
                if (row.Cells[1].Value != null)
                {
                    ada.UpdateQuery(row.Cells[2].Value.ToString(), row.Cells[0].Value.ToString(), (int)metroComboBox1.SelectedValue, dateTimePicker1.Text);
                }
            }
            DataTable dt_new = ada.GetDataBy((int)metroComboBox1.SelectedValue, dateTimePicker1.Text);
            dataGridView1.DataSource = dt_new;

        }

        private void metroButton3_Click(object sender, EventArgs e)
        {
            FormAddClass addClass = new FormAddClass();
            addClass.UserID = this.UserID;
            addClass.ShowDialog();
        }

        private void metroTabPage1_Click(object sender, EventArgs e)
        {

        }

        private void metroButton4_Click(object sender, EventArgs e)
        {
            StudentsForm students = new StudentsForm();
            students.ClassName = metroComboBox1.Text;
            students.ClassID = (int)metroComboBox1.SelectedValue;
             
            students.ShowDialog();
        }

        private void metroButtonget_Click(object sender, EventArgs e)
        {
            //check if record exist
            //if yes load them and if not create a record for each student and load

            DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter ada = new DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter();
            DataTable dt = ada.GetDataBy((int)metroComboBox1.SelectedValue, dateTimePicker1.Text);
            if (dt.Rows.Count > 0)
            {
                //records
                DataTable dt_new = ada.GetDataBy((int)metroComboBox1.SelectedValue, dateTimePicker1.Text);
                dataGridView1.DataSource = dt_new;

            }
            else
            {
                //no record
                DataSet1TableAdapters.StudentsTBLTableAdapter students_adapter =new  DataSet1TableAdapters.StudentsTBLTableAdapter();
                DataTable dt_students = students_adapter.GetDataByClassID((int)metroComboBox1.SelectedValue);
                foreach(DataRow row in dt_students.Rows)
                {
                    //insert a new record for the syudent
                    ada.InsertQuery((int)row[0], (int)metroComboBox1.SelectedValue, dateTimePicker1.Text, "", row[1].ToString(), metroComboBox1.Text);


                }
                DataTable dt_new = ada.GetDataBy((int)metroComboBox1.SelectedValue, dateTimePicker1.Text);
                dataGridView1.DataSource = dt_new;


            }
            
        }
        //clear
        private void metroButton2_Click(object sender, EventArgs e)
        {
            DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter ada = new DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter();
            foreach (DataGridViewRow row in dataGridView1.Rows)
            {
                if (row.Cells[1].Value != null)
                {
                    ada.UpdateQuery("", row.Cells[0].Value.ToString(), (int)metroComboBox1.SelectedValue, dateTimePicker1.Text);
                }
            }
            DataTable dt_new = ada.GetDataBy((int)metroComboBox1.SelectedValue, dateTimePicker1.Text);
            dataGridView1.DataSource = dt_new;

        }

        private void metroButton5_Click(object sender, EventArgs e)
        {
            //report
            //get student
            DataSet1TableAdapters.StudentsTBLTableAdapter students_adapter = new DataSet1TableAdapters.StudentsTBLTableAdapter();
            DataTable dt_students = students_adapter.GetDataByClassID((int)metroComboBox2.SelectedValue);

            DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter ada = new DataSet1TableAdapters.AttendanceRecordsTBLTableAdapter();

            int P = 0;
            int A = 0;
            int L = 0;
           ;
            //loop and get value
            foreach (DataRow row in dt_students.Rows)
            {
                //present count
                P = (int)ada.GetDataByReport(dateTimePicker2.Value.Month, row[1].ToString(), "present").Rows[0][6];

                //absence
                A = (int)ada.GetDataByReport(dateTimePicker2.Value.Month, row[1].ToString(), "absent").Rows[0][6];

                //late
                L = P = (int)ada.GetDataByReport(dateTimePicker2.Value.Month, row[1].ToString(), "late").Rows[0][6];

                ListViewItem litem = new ListViewItem();
                litem.Text = row[1].ToString();
                litem.SubItems.Add(P.ToString());
                litem.SubItems.Add(A.ToString());
                litem.SubItems.Add(L.ToString());
                listView1.Items.Add(litem);


            }
        }

        private void metroComboBox2_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void metroButton6_Click(object sender, EventArgs e)
        {
            RegistrationFrm reg = new RegistrationFrm();
            reg.ShowDialog();
        }
    }
}
