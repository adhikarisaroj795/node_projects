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
    public partial class login : Form
    {
        public login()
        {
            InitializeComponent();
        }

        private void clk_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            signup1.Show();
            signup1.BringToFront();
           
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            forgotpw fm = new forgotpw();
            fm.Show();
        }

        private void login_Load(object sender, EventArgs e)
        {
            
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Hide();
            mainpage mn = new mainpage();
            mn.Show();
        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void signup1_Load(object sender, EventArgs e)
        {
            this.Hide();        }
    }
}
