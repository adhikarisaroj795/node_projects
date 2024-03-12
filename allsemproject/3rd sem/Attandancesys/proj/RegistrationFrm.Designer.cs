
namespace proj
{
    partial class RegistrationFrm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.textuser = new MetroFramework.Controls.MetroTextBox();
            this.textpass = new MetroFramework.Controls.MetroTextBox();
            this.textpass1 = new MetroFramework.Controls.MetroTextBox();
            this.metroLabel1 = new MetroFramework.Controls.MetroLabel();
            this.metroLabel2 = new MetroFramework.Controls.MetroLabel();
            this.metroLabel3 = new MetroFramework.Controls.MetroLabel();
            this.metroButton1 = new MetroFramework.Controls.MetroButton();
            this.SuspendLayout();
            // 
            // textuser
            // 
            this.textuser.Location = new System.Drawing.Point(107, 80);
            this.textuser.Name = "textuser";
            this.textuser.Size = new System.Drawing.Size(181, 23);
            this.textuser.TabIndex = 0;
            this.textuser.Click += new System.EventHandler(this.metroTextBox1_Click);
            // 
            // textpass
            // 
            this.textpass.Location = new System.Drawing.Point(107, 142);
            this.textpass.Name = "textpass";
            this.textpass.PasswordChar = '*';
            this.textpass.Size = new System.Drawing.Size(181, 23);
            this.textpass.TabIndex = 1;
            this.textpass.Click += new System.EventHandler(this.metroTextBox2_Click);
            // 
            // textpass1
            // 
            this.textpass1.Location = new System.Drawing.Point(107, 207);
            this.textpass1.Name = "textpass1";
            this.textpass1.PasswordChar = '*';
            this.textpass1.Size = new System.Drawing.Size(181, 23);
            this.textpass1.TabIndex = 2;
            // 
            // metroLabel1
            // 
            this.metroLabel1.AutoSize = true;
            this.metroLabel1.Location = new System.Drawing.Point(107, 57);
            this.metroLabel1.Name = "metroLabel1";
            this.metroLabel1.Size = new System.Drawing.Size(80, 20);
            this.metroLabel1.TabIndex = 3;
            this.metroLabel1.Text = "User Name";
            // 
            // metroLabel2
            // 
            this.metroLabel2.AutoSize = true;
            this.metroLabel2.Location = new System.Drawing.Point(107, 119);
            this.metroLabel2.Name = "metroLabel2";
            this.metroLabel2.Size = new System.Drawing.Size(66, 20);
            this.metroLabel2.TabIndex = 4;
            this.metroLabel2.Text = "Password";
            // 
            // metroLabel3
            // 
            this.metroLabel3.AutoSize = true;
            this.metroLabel3.Location = new System.Drawing.Point(107, 184);
            this.metroLabel3.Name = "metroLabel3";
            this.metroLabel3.Size = new System.Drawing.Size(119, 20);
            this.metroLabel3.TabIndex = 5;
            this.metroLabel3.Text = "Confirm Password";
            // 
            // metroButton1
            // 
            this.metroButton1.Location = new System.Drawing.Point(154, 255);
            this.metroButton1.Name = "metroButton1";
            this.metroButton1.Size = new System.Drawing.Size(98, 38);
            this.metroButton1.TabIndex = 6;
            this.metroButton1.Text = "Register";
            this.metroButton1.Click += new System.EventHandler(this.metroButton1_Click);
            // 
            // RegistrationFrm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(404, 372);
            this.Controls.Add(this.metroButton1);
            this.Controls.Add(this.metroLabel3);
            this.Controls.Add(this.metroLabel2);
            this.Controls.Add(this.metroLabel1);
            this.Controls.Add(this.textpass1);
            this.Controls.Add(this.textpass);
            this.Controls.Add(this.textuser);
            this.Name = "RegistrationFrm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "Register";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private MetroFramework.Controls.MetroTextBox textuser;
        private MetroFramework.Controls.MetroTextBox textpass;
        private MetroFramework.Controls.MetroTextBox textpass1;
        private MetroFramework.Controls.MetroLabel metroLabel1;
        private MetroFramework.Controls.MetroLabel metroLabel2;
        private MetroFramework.Controls.MetroLabel metroLabel3;
        private MetroFramework.Controls.MetroButton metroButton1;
    }
}