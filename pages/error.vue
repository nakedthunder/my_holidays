  <template>
    <div class="server_error_page_box">
        <div class="server_error_page_img_box">
            <img src="/welstory/images/common/server_maintenance.svg" alt="server_img">
        </div>
        <div class="server_error_page_body">
            <div class="server_error_heade_msg">
                <p>서버 점검 안내</p>
            </div>
            <div class="server_error_body_msg">
                <span>불편을 끼쳐드려서 죄송합니다.<br> 갤러리 웹 사이트 및 모바일 앱 시스템 안정화를 위해 서비스 점검 중입니다.<br> 점검시간 동안 서비스 이용이 일시 중단되오니 고객님의 깊은
                    양해 부탁 드립니다.</span>
            </div>
            <div class="server_info_box">
                <ul>
                    <li><strong>점검시간</strong> 2022.08.15 24:00 ~ 2022.08.16 06:00</li>
                    <li><strong>고객센터</strong> 080-888-8888 </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.server_error_page_box {
    text-align: center;
    padding-top: 200px;
}

.server_error_page_img_box {
    display: inline-block;
}

.server_error_heade_msg {
    padding-top: 20px;
    padding-bottom: 20px;
}

.server_error_heade_msg p {
    font-weight: 500;
    font-size: 28px;
}

.server_error_body_msg {
    padding-bottom: 50px;
}

.cs_center_title {
    font-weight: bold;
}

.server_info_box {
    display: inline-block;
    padding: 30px 50px;
    border-radius: 4px;
    text-align: left;
    background: #F7F7F7;
}

.server_info_box li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.server_info_box li::before {
    content: "";
    display: inline-block;
    margin-right: 6px;
    border-radius: 3px;
    width: 3px;
    height: 3px;
    background: #141415;
}

.server_info_box li strong {
    margin-right: 35px;
    font-weight: 500;
    font-size: 15px;
}

.server_info_box li:last-child {
    margin-bottom: 0px;
}
</style>
