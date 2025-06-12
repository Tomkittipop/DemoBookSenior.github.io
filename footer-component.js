class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-800 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">ติดต่อเรา</h3>
                            <p>123 ถนนสุขภาพดี, กรุงเทพฯ 10110</p>
                            <p>โทร: 095-986-4670</p>
                            <p><a href="mailto:elderlyhomecontract@gmail.com" class="hover:underline">อีเมล: elderlyhomecontract@gmail.com</a></p>
                            <p><a href="index.html" class="hover:underline">กลับไปหน้าแรก</a></p>
                        </div>
                        <div>
    <h3 class="text-xl font-semibold mb-4">แผนที่</h3>
    <div class="h-40 rounded-lg overflow-hidden"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.9054416533872!2d100.43357107463954!3d13.844714186556917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2918fffffffff%3A0x8895be0cf1a1d540!2z4Lin4Lix4LiU4Lia4Liy4LiH4LmA4Lil4LiZ4LmA4LiI4Lij4Li04LiN!5e0!3m2!1sth!2sth!4v1749658167314!5m2!1sth!2sth" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">ลิงก์สำคัญ</h3>
                            <ul>
                                <li><a href="index.html#about" class="hover:underline">เกี่ยวกับเรา</a></li>
                                <li><a href="index.html#pricing" class菩</li>
                                <li><a href="index.html#contact" class="hover:underline">ติดต่อ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <p>© 2025 ระบบจัดการสถานดูแลผู้สูงอายุ. สงวนลิขสิทธิ์.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);