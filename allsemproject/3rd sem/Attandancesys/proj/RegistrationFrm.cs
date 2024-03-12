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
    public partial class RegistrationFrm : Form
    {
        public RegistrationFrm()
        {
            InitializeComponent();
        }

        private void metroTextBox1_Click(object sender, EventArgs e)
        {

        }

        private void metroTextBox2_Click(object sender, EventArgs e)
        {

        }

        private void metroButton1_Click(object sender, EventArgs e)
        {
            //register
            if(textpass.Text != textpass1.Text)
            {
                MessageBox.Show("Password don't match");
                return;
            }
            DataSet1TableAdapters.UsersTableAdapters ada = new DataSet1TableAdapters.UsersTableAdapters();
            ada.InsertQuery(textuser.Text, textpass.Text);
            MessageBox.Show("Registration Successful!");
            Close();


        }
    }
}
