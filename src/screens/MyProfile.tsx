import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { COLORS, VARIANTS } from "../constants";
import UserPolygonColor from "../components/Icon-Svg/svg/user-polygon-color";
import AngleRight from "../components/Icon-Svg/svg/angle-right";
import LockColor from "../components/Icon-Svg/svg/lock-color";
import DeliveryDoneColor from "../components/Icon-Svg/svg/delivery-done-color";
import DeliveryDone from "../components/Icon-Svg/svg/delivery-done";
import NotepadColor from "../components/Icon-Svg/svg/notepad-color";
import VoucherColor from "../components/Icon-Svg/svg/voucher-color";
import EyeColor from "../components/Icon-Svg/svg/eye-color";
import Eye from "../components/Icon-Svg/svg/eye";
import LoveColor from "../components/Icon-Svg/svg/love-color";
import StarColor from "../components/Icon-Svg/svg/star-color";
import MoneyBagDollarColor from "../components/Icon-Svg/svg/money-bag-dollar-color";
import CartArrowUpColor from "../components/Icon-Svg/svg/cart-arrow-up-color";
import HelpColor from "../components/Icon-Svg/svg/help-color";

const data = [
  {
    title: "Thông tin cá nhân",
    icon: <UserPolygonColor />,
  },
  {
    title: "Thay đổi mật khẩu",
    icon: <LockColor />,
  },
  {
    title: "Danh sách địa chỉ nhận hàng",
    icon: <DeliveryDone />,
  },
  {
    isDivide: true,
  },
  {
    title: "Danh sách đơn hàng",
    icon: <NotepadColor />,
  },
  {
    title: "Mã giảm giá",
    icon: <VoucherColor />,
  },
  {
    title: "Sản phẩm đã xem",
    icon: <Eye />,
  },
  {
    title: "Sản phẩm yêu thích",
    icon: <LockColor />,
  },
  {
    title: "Đánh giá sản phẩm",
    icon: <StarColor />,
  },
  {
    isDivide: true,
  },
  {
    title: "Chương trình FXu",
    icon: <MoneyBagDollarColor />,
  },
  {
    title: "Hướng dẫn mua hàng",
    icon: <CartArrowUpColor />,
  },
  {
    title: "Câu hỏi thường gặp",
    icon: <HelpColor />,
  },
];
export default function MyProfile({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Image
            style={styles.avatar}
            source={require("../../assets/users/user_1.png")}
            width={30}
            height={30}
          />
        </View>
        <View style={styles.welcomeBlock}>
          <Text style={{ fontWeight: "700", fontSize: 18, lineHeight: 24 }}>
            Chào mừng bạn đến với Fanita
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 16,
            }}
          >
            Đăng nhập / Đăng ký
          </Text>
        </View>
      </View>
      <View style={styles.barBlock}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              {!item.isDivide ? (
                <View
                  style={styles.block}
                  onTouchStart={() => {
                    console.log("hello");
                  }}
                >
                  <View style={styles.iconBlock}>
                    {item.icon}
                    <Text style={styles.textBlock}>{item.title}</Text>
                  </View>
                  <View>
                    <AngleRight />
                  </View>
                </View>
              ) : (
                <View style={styles.line}></View>
              )}
            </>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderRadius: 60,
    borderWidth: 1,
    width: 70,
    height: 70,
  },
  barBlock: {
    marginLeft: 16,
    marginTop: 20,
    marginRight: 16,
    paddingTop: 16,
  },
  headerContainer: {
    marginTop: 20,
    marginLeft: 16,
    flexDirection: "row",
    gap: 10,
    //flex: 1,
  },
  welcomeBlock: {
    flexDirection: "column",
    gap: 10,
    color: COLORS["--colorGrey600"],
  },
  block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 13,
  },
  iconBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textBlock: {
    ...VARIANTS.sub2,
  },
  line: {
    height: 1,
    alignSelf: "stretch",
    borderColor: COLORS["--colorBorderLine"],
    backgroundColor: COLORS["--colorBorderLine"],
  },
});
