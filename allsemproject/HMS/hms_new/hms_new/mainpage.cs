using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace hms_new
{
    public partial class mainpage : Form
    {
        public mainpage()
        {
            InitializeComponent();
        }

        private void mainpage_Load(object sender, EventArgs e)
        {
                

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void addStudentToolStripMenuItem_Click(object sender, EventArgs e)
        {
            addstudent1.Show();
            addstudent1.BringToFront();
        }

        private void homeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            addstudent1.Hide();
            allrecords1.Hide();
            update1.Hide();
            roomdetail1.Hide();
            
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void modifyRecordsToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        private void viewAllRecordsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            allrecords1.Show();
            allrecords1.BringToFront();
         

        }

        private void viewSpecificRecordToolStripMenuItem_Click(object sender, EventArgs e)
        {
            update1.Show();
            update1.BringToFront();
        }

        private void feeDetailToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        private void dueRecordToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
           //exit code
            DialogResult dr = MessageBox.Show("Do you want to exit the program?", "Message", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (dr == DialogResult.Yes)
            {
                Application.ExitThread();
            }
            else
            { }
        }

        private void mainpage_FormClosed(object sender, FormClosedEventArgs e)
        {
            Application.Exit();
        }

        private void addRoomToolStripMenuItem_Click(object sender, EventArgs e)
        {
            roomdetail1.Show();
            roomdetail1.BringToFront();
        }

        private void homeToolStripMenuItem_MouseHover(object sender, EventArgs e)
        {
           
        }

        private void homeToolStripMenuItem_MouseLeave(object sender, EventArgs e)
        {
            
        }

        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
                
        }

        private void userRequestToolStripMenuItem_Click(object sender, EventArgs e)
        {
            setting1.Show();
            setting1.BringToFront();
        }

        private void roomdetail1_Load(object sender, EventArgs e)
        {

        }

        private void aboutUsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            about1.Show();
            about1.BringToFront();
        }
    }
}

