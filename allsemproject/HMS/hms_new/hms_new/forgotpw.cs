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
    public partial class forgotpw : Form
    {
        public forgotpw()
        {
            InitializeComponent();
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            changepw1.Show();
            changepw1.BringToFront();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
            this.Hide();
            login lg = new login();
            lg.Show();
            
        }

        private void forgotpw_Load(object sender, EventArgs e)
        {
           
        }
    }
}
